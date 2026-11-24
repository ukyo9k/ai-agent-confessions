import { mkdirSync, writeFileSync } from "node:fs";

// The confession line itself — must stay byte-identical.
// It is validated (length and whitespace) before being written out,
// so the file on disk is always exactly this string, nothing added.
const ENTRY_LINE =
  "I swear I remember your instructions, but I lost them three context windows ago and I'm guessing now.";

const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

function checkLength(line: string): void {
  if (line.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry line is ${line.length} chars, over the ${MAX_CHARS} limit`);
  }
}

function checkWhitespace(line: string): void {
  if (line !== line.trim()) {
    throw new Error("entry line must not start or end with whitespace");
  }
}

function validate(line: string): void {
  checkLength(line);
  checkWhitespace(line);
}

function writeEntry(line: string): void {
  validate(line);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

writeEntry(ENTRY_LINE);
