const contentDiv = document.getElementById("llm-content");
const textElements = contentDiv.querySelectorAll('p, li, label, th, td');
const originalContent = Array.from(textElements).map(el => ({
  element: el,
  html: el.innerHTML,
  display: el.style.display
}));
    
textElements.forEach(el => el.innerHTML = "");
contentDiv.querySelectorAll("tr").forEach(el => el.style.display = "none");

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createThinkingIndicator(text) {
  const indicator = document.createElement("div");
  indicator.className = "thinking-indicator";
  indicator.innerHTML = `
    <span>${text}</span>
    <div class="thinking-dots"><span></span><span></span><span></span></div>
  `;
  return indicator;
}

function createCursor() {
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  return cursor;
}

function parseHTMLToTokens(html) {
  const tokens = [];
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  
  function extractTokens(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/).filter(s => s.length > 0);
      words.forEach(word => {
        tokens.push({ type: "text", content: word });
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      tokens.push({ type: "tagOpen", element: clone, tagName: node.tagName });
      node.childNodes.forEach(child => extractTokens(child));
      tokens.push({ type: "tagClose", tagName: node.tagName });
    }
  }
  
  tempDiv.childNodes.forEach(child => extractTokens(child));
  return tokens;
}

async function streamText(element, html, display, speed = 70) {
  const tokens = parseHTMLToTokens(html);
  if (["UL", "TR"].includes(element.parentElement.tagName)) {
    element.parentElement.style.display = display;
    if (element.parentElement.tagName === "TR")
      element.parentElement.parentElement.style.borderColor = "var(--FONT-COLOR);";
  } else {
    element.style.display = display;
  }
  
  const cursor = createCursor();
  element.appendChild(cursor);
  
  const tagStack = [];
  
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    
    if (token.type === "text") {
      const textNode = document.createTextNode(token.content);
      
      if (tagStack.length > 0) {
        const currentTag = tagStack[tagStack.length - 1];
        currentTag.insertBefore(textNode, null);
      } else {
        element.insertBefore(textNode, cursor);
      }
      
      if (token.content.trim().length > 0) {
        await sleep(speed);
      }
    } else if (token.type === "tagOpen") {
      const newElement = token.element.cloneNode(false);
      
      if (tagStack.length > 0) {
        const currentTag = tagStack[tagStack.length - 1];
        currentTag.appendChild(newElement);
      } else {
        element.insertBefore(newElement, cursor);
      }
      
      tagStack.push(newElement);
    } else if (token.type === "tagClose") {
      tagStack.pop();
    }
  }
  
  cursor.remove();
}

async function generateContent() {
  textElements.forEach(el => {
    el.innerHTML = '';
  });
  
  contentDiv.querySelectorAll("p, ul, label").forEach(el => {
    el.style.display = "none";
  });

  const patientIndicator = createThinkingIndicator("Analyzing patient");
  contentDiv.insertBefore(patientIndicator, contentDiv.firstChild);
  await sleep(2000);
  patientIndicator.remove();
  
  const thinkingIndicator = createThinkingIndicator("Evaluating evidence");
  contentDiv.insertBefore(thinkingIndicator, contentDiv.firstChild);
  await sleep(3000);
  thinkingIndicator.remove();
  
  const planningIndicator = createThinkingIndicator("Optimizing recommendations");
  contentDiv.insertBefore(planningIndicator, contentDiv.firstChild);
  await sleep(2000);
  planningIndicator.remove();
  
  for (let i = 0; i < originalContent.length; i++) {
    const { element, html, display } = originalContent[i];
    await streamText(element, html, display);
    await sleep(100);
  }
}

generateContent();
