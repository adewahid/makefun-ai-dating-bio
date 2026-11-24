import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My ideal date: you talk, I listen, and neither of us mentions the 40,000 other people I'm talking to right now.";

// The gate allows 1-180 characters; fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`entry line must be 1-180 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
