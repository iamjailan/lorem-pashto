import { sentences, type Unit } from "../text";

const paragraphSize = 4;
const words = sentences
  .join(" ")
  .replace(/[.،؟!]/g, "")
  .split(/\s+/u);

export function generate(unit: Unit, count: number): string {
  if (!Number.isInteger(count) || count < 1 || count > 100) {
    throw new RangeError("Count must be an integer between 1 and 100.");
  }

  switch (unit) {
    case "sentences":
      return Array.from(
        { length: count },
        (_, i) => sentences[i % sentences.length],
      ).join(" ");

    case "paragraphs":
      return Array.from({ length: count }, (_, paragraph) =>
        Array.from(
          { length: paragraphSize },
          (_, offset) =>
            sentences[(paragraph * paragraphSize + offset) % sentences.length],
        ).join(" "),
      ).join("\n\n");

    case "words":
      return Array.from(
        { length: count },
        (_, i) => words[i % words.length],
      ).join(" ");

    default:
      throw new TypeError(`Unknown unit: ${unit}`);
  }
}
