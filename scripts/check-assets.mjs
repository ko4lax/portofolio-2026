#!/usr/bin/env node
// Fails if a page references an asset that is not in public/. This is the class
// of bug that once shipped a missing hero image and a 404 preload.
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const srcDir = path.join(root, "src");

const PATTERNS = [
  /"(\/images\/[^"]+)"/g,
  /"(\/projects\/[^"]+)"/g,
  /"(\/(?:resume\.pdf|og-image\.jpg|favicon\.ico))"/g,
  /'(\/images\/[^']+)'/g,
  /'(\/projects\/[^']+)'/g,
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = (await walk(srcDir)).filter((f) => /\.(js|jsx|mjs)$/.test(f));
const missing = [];
const checked = new Set();

for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const pattern of PATTERNS) {
    for (const match of text.matchAll(pattern)) {
      const ref = match[1];
      if (checked.has(ref)) continue;
      checked.add(ref);
      try {
        await stat(path.join(root, "public", ref.replace(/^\//, "")));
      } catch {
        missing.push(`${ref}  (referenced in ${path.relative(root, file)})`);
      }
    }
  }
}

if (missing.length > 0) {
  console.error("Missing assets:");
  for (const item of missing) console.error("  " + item);
  process.exit(1);
}

console.log(`Asset check passed: ${checked.size} referenced assets exist in public/.`);
