const deg2rad = deg => { return deg * Math.PI / 180; }
const rad2deg = rad => { return rad * 180 / Math.PI; }

const initialData = { nodes: [{ id: 0 }], links: [] };

const N = 500;
const nodes = [...Array(N).keys()].map(i => {
    return {
        id: i,
        val: (Math.random() * 1.5) + 1,
    };
});

function generateLinks(nodes) {
    let links = [];
    nodes.forEach(node => {
        let numNodeLinks = Math.round(Math.random() * (0.75 + Math.random())) + 1;
        for(let i = 0; i < numNodeLinks; i++) {
            links.push({
                source: node.id,
                target: Math.round(Math.random() * (node.id > 0 ? node.id - 1 : node.id))
            });
        }
    });
    return links;
}
const links = generateLinks(nodes);
const gData = {nodes, links};

let distance = 1500;

const graphElem = document.getElementById("3d-graph");

const Graph = ForceGraph3D()(graphElem);
Graph.width(document.getElementById("3d-graph").offsetWidth);
Graph.height(400);
Graph.enableNodeDrag(false);
Graph.enableNavigationControls(false);
Graph.enablePointerInteraction(false);
Graph.showNavInfo(false);
if (document.getElementsByTagName("html")[0].className.includes("dark-theme")) {
  Graph.backgroundColor("#1f1f1f");
} else {
  Graph.backgroundColor("#fdfdfd");
}

Graph.cameraPosition({ z: distance });

Graph.nodeRelSize(4);
Graph.nodeOpacity(1);

Graph.linkWidth(5);

Graph.graphData(gData);
Graph.nodeColor(d => "#bfbfbf");
Graph.linkColor(d => "#9f9f9f");

let currentAngle = 0;
let isRotationActive = true;
setInterval(() => {
    if (isRotationActive) {
        Graph.cameraPosition({
            x: distance * Math.sin(deg2rad(currentAngle)),
            z: distance * Math.cos(deg2rad(currentAngle))
        });
        currentAngle += 0.4;
    }
}, 20);

window.addEventListener('resize', e => {
    Graph.width(document.getElementById("3d-graph").offsetWidth);
    Graph.height(400);
    Graph.refresh();
});

document.getElementsByClassName("light-dark-toggle")[0].onclick = function () {
  var body = document.getElementsByTagName("html")[0];

  if (body.className.includes("dark-theme")) {
    body.className = "";
    document.getElementById("light-dark-toggle-icon").className = "fa fa-moon-o";
    Graph.backgroundColor("#fdfdfd");
  } else {
    body.className += " dark-theme";
    document.getElementById("light-dark-toggle-icon").className = "fa fa-sun-o";
    Graph.backgroundColor("#1f1f1f");
  }
  Graph.refresh();
}

