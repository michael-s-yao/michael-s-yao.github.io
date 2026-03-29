let cards = [];
let idx = 0;
let flipped = false;

document.getElementById("fileInput").addEventListener("change", e => {
  if (e.target.files[0])
    readFile(e.target.files[0]);
});

function showUpload() {
  document.getElementById("navRight").style.display = "none";
  document.getElementById("progress").style.width = "0%";

  document.getElementById("view").innerHTML = `
    <h1 style="margin: 2vh 0 6px 0">upload a deck</h1>
    <p>CSV with <b>Question</b> and <b>Answer</b> columns.</p>
    <div class="upload-section">
      <div class="drop-zone" id="dropZone">
        <p>drag and drop a .csv file here</p>
        <button
          class="btn btn-primary"
          onclick="document.getElementById('fileInput').click()"
        >browse file</button>
      </div>
      <p class="upload-error" id="uploadError">⚠ couldn't parse the csv</p>
    </div>
  `;

  bindDropZone();
  document.getElementById("fileInput").value = "";
}

function bindDropZone() {
  const dz = document.getElementById("dropZone");
  if (!dz)
    return;
  dz.addEventListener("dragover", e => {
    e.preventDefault();
    dz.classList.add("over");
  });
  dz.addEventListener("dragleave", () => dz.classList.remove("over"));
  dz.addEventListener("drop", e => {
    e.preventDefault(); dz.classList.remove("over");
    if (e.dataTransfer.files[0])
      readFile(e.dataTransfer.files[0]);
  });
}

function readFile(file) {
  const r = new FileReader();
  r.onload = e => parseCSV(e.target.result);
  r.readAsText(file);
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2)
    return csvError();

  const header = splitLine(lines[0]).map(h => h.toLowerCase().trim());
  const qIdx = header.findIndex(h => h.includes("question") || h === "q");
  const aIdx = header.findIndex(h => h.includes("answer") || h === "a");

  let rows;
  if (qIdx !== -1 && aIdx !== -1) {
    rows = lines.slice(1).map(l => {
      const c = splitLine(l);
      return [c[qIdx] || "", c[aIdx] || ""];
    });
  } else {
    rows = lines.slice(1).map(l => {
      const c = splitLine(l);
      return [c[0] || "", c[1] || ""];
    });
  }

  rows = rows.filter(r => r[0].trim() && r[1].trim());
  if (!rows.length)
    return csvError();

  cards = rows.map(([q, a]) => ({ q, a }));
  idx = 0;
  flipped = false;
  startDeck();
  shuffleDeck();
}

function splitLine(line) {
  const result = [];
  let cur = "", inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i+1] === '"') {
        cur += '"';
        i++;
      } else {
        inQ = !inQ;
      }
    } else if (ch === "," && !inQ) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur.trim());
  return result;
}

function csvError() {
  const el = document.getElementById("uploadError").style.display = "block";
}

function startDeck() {
  document.getElementById("navRight").style.display = "flex";
  buildDeckView();
  render();
}

function buildDeckView() {
  document.getElementById("view").innerHTML = `
    <div class="card-wrap" onclick="flip()" id="cardWrap">
      <div class="card" id="card">
        <div class="card-label" id="cardLabel">question</div>
        <div class="card-content" id="cardContent"></div>
        <div class="card-hint" id="cardHint"></div>
      </div>
    </div>
    <div class="controls">
      <button class="btn" onclick="prevCard()" id="btnPrev">← prev</button>
      <button class="btn btn-primary" onclick="flip()" id="btnFlip">
        show answer
      </button>
      <div class="btn-spacer"></div>
      <button class="btn" onclick="nextCard()" id="btnNext">next →</button>
    </div>
    <div class="shortcuts">
      <div class="shortcut">
        <kbd class="monospace">←</kbd><kbd class="monospace">→</kbd>navigate
      </div>
      <div class="shortcut"><kbd class="monospace">space</kbd>flip / next</div>
      <div class="shortcut"><kbd class="monospace">⌘Z</kbd>go back</div>
    </div>
  `;
}

function render() {
  const card = cards[idx];
  const cardEl = document.getElementById("card");

  cardEl.classList.toggle("flipped", flipped);
  document.getElementById("cardLabel").textContent = flipped
    ? "answer"
    : "question";
  document.getElementById("cardContent").innerHTML = md(
    flipped ? card.a : card.q
  );

  document.getElementById("cardHint").innerHTML = flipped
    ? "<kbd class='monospace'>space</kbd>&nbsp;next"
    : "<kbd class='monospace'>space</kbd>&nbsp;to flip";

  document.getElementById("btnFlip").textContent = flipped
    ? "hide answer"
    : "reveal answer";
  document.getElementById("btnPrev").disabled = idx === 0;
  document.getElementById("btnNext").disabled = idx === cards.length - 1;

  document.getElementById("counter").textContent = `
    ${idx + 1} / ${cards.length}
  `;
  document.getElementById("progress").style.width = (
    (idx / cards.length * 100) + "%"
  );
}

function md(text) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function flip() {
  flipped = !flipped;
  render();
}

function nextCard() {
  if (idx < cards.length - 1) {
    idx++;
    flipped = false;
    render();
  }
  else {
    showComplete();
  }
}

function prevCard() {
  idx = (idx > 0) ? idx - 1 : idx;
  flipped = false;
  render();
}

function shuffleDeck() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  idx = 0;
  flipped = false;
  render();
}

function showComplete() {
  document.getElementById("progress").style.width = '100%';
  document.getElementById('view').innerHTML = `
    <div class="complete-section">
      <h2 style="color: var(--FONT-COLOR); margin-top: 20px">deck complete.</h2>
      <p>You've gone through all ${cards.length} cards.</p>
      <div class="complete-actions">
        <button class="btn btn-primary" onclick="restartDeck()">restart</button>
        <button class="btn" onclick="showUpload()">load new csv</button>
      </div>
    </div>
  `;
}

function restartDeck() {
  idx = 0;
  flipped = false;
  buildDeckView();
  render();
}

document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key === "z") {
    if (!cards.length)
      return;
    e.preventDefault();
    if (idx > 0) {
      idx--;
      flipped = false;
      render();
    }
    return;
  }

  if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON")
    return;
  if (!cards.length)
    return;

  if (e.key === " ") {
    e.preventDefault();
    flipped ? nextCard() : flip();
  } else if (e.key === "ArrowRight") {
    nextCard();
  } else if (e.key === "ArrowLeft") {
    prevCard();
  }
});

showUpload();
