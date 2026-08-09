#!/usr/bin/env node
// Regenerates llms.txt from index.html and public/js/cv.js.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BASE_URL = "https://www.michaelsyao.com";

const ICON_LABELS = {
  "fa-linkedin-square": "LinkedIn",
  "fa-github": "GitHub",
  "fa-twitter": "X (Twitter)",
  "fa-envelope": "Email [no spam]",
  "fa-graduation-cap": "Google Scholar",
};

function resolveUrl(href) {
  if (/^https?:\/\//.test(href)) return href;
  return `${BASE_URL}/${href.replace(/^\//, "")}`;
}

function htmlToMd(html) {
  let s = html;
  s = s.replace(/&nbsp;/g, " ");
  s = s.replace(/&emsp;/g, "  ");
  s = s.replace(/&apos;/g, "'");
  s = s.replace(/&bull;/g, "•");
  s = s.replace(/&amp;/g, "&");
  s = s.replace(/<img[^>]*>/g, "");
  s = s.replace(/<i class=['"]fa fa-link['"][^>]*><\/i>/g, "");
  s = s.replace(/<a href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>/g, (_, href, text) => {
    return `[${text.trim()}](${resolveUrl(href)})`;
  });
  s = s.replace(/<b>([\s\S]*?)<\/b>/g, "**$1**");
  s = s.replace(/<em>([\s\S]*?)<\/em>/g, "*$1*");
  return s.replace(/\s+/g, " ").trim();
}

function bulletList(events) {
  return events
    .map((e) => `  - ${e.date} | ${htmlToMd(e.description)}`)
    .join("\n");
}

function loadCvData() {
  const source = fs.readFileSync(path.join(ROOT, "public/js/cv.js"), "utf8");
  const stubElement = { appendChild() {}, set className(_) {}, set innerHTML(_) {} };
  const sandbox = {
    document: {
      getElementById: () => stubElement,
      createElement: () => ({ appendChild() {}, set className(_) {}, set innerHTML(_) {} }),
    },
  };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "cv.js" });
  const { all_history, all_changelog, all_teaching } = sandbox;
  return { all_history, all_changelog, all_teaching };
}

function extractBetween(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) {
    throw new Error(`Could not find section between "${startMarker}" and "${endMarker}"`);
  }
  return html.slice(start + startMarker.length, end);
}

function matchAllParagraphs(html) {
  return [...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => htmlToMd(m[1]));
}

function loadIndexData() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  const h1Match = html.match(/<h1>([^<]+)<\/h1>/);
  const aboutSummary = h1Match[1].trim();

  const cvHrefMatch = html.match(/<a href="([^"]+)" download=/);
  const cvUrl = resolveUrl(cvHrefMatch[1]);

  const statusMatch = html.match(/<label>Currently<\/label>\s*<h2>([^<]+)<\/h2>/);
  const currently = statusMatch[1]
    .split("&bull;")
    .map((part) => part.replace(/&nbsp;/g, " ").trim())
    .filter(Boolean)
    .join(", ");

  const introHtml = extractBetween(html, '<div class="two-box-intro">', '<img id="headshot"');
  const [introBio, introAdvisors] = matchAllParagraphs(introHtml);

  const outreachHtml = extractBetween(html, '<h2 id="outreach">', "</main>");
  const outreachParas = matchAllParagraphs(outreachHtml);

  const socials = [];
  const socialItemRe = /<div\s+class="social-item [lmr]"\s+onclick="window\.open\('([^']+)'[^)]*\);?"\s*>([\s\S]*?)<\/div>/g;
  for (const m of html.matchAll(socialItemRe)) {
    const [, url, body] = m;
    const iconMatch = body.match(/class="fa ([\w-]+) social-icon"/);
    const textMatch = body.match(/<p>\s*([\s\S]*?)\s*<\/p>/);
    if (!iconMatch || !textMatch) continue;
    const icon = iconMatch[1];
    const label = ICON_LABELS[icon];
    if (!label) continue;
    const target = icon === "fa-envelope" ? textMatch[1].replace(/\s+/g, " ").trim() : url;
    socials.push(`  - [${label}](${target})`);
  }

  return { aboutSummary, cvUrl, currently, introBio, introAdvisors, outreachParas, socials };
}

function build() {
  const { all_history, all_changelog, all_teaching } = loadCvData();
  const idx = loadIndexData();

  return `# Michael Yao - Homepage

## About

${idx.aboutSummary}

[CV](${idx.cvUrl})

Currently: ${idx.currently}

${idx.introBio}

${idx.introAdvisors}

${bulletList(all_history)}

## Publications

${bulletList(all_changelog)}

## Contact

${idx.socials.join("\n")}

## Teaching

${bulletList(all_teaching)}

## Outreach

${idx.outreachParas.join("\n\n")}
`;
}

const output = build();
const outPath = path.join(ROOT, "llms.txt");

if (process.argv.includes("--check")) {
  const current = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
  if (current !== output) {
    console.error("llms.txt is out of date. Run `node scripts/sync-llms-txt.mjs` to update it.");
    process.exit(1);
  }
  console.log("llms.txt is up to date.");
} else {
  fs.writeFileSync(outPath, output);
  console.log(`Wrote ${outPath}`);
}
