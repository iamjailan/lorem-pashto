import test from "node:test";
import assert from "node:assert/strict";
import { sentences, type Unit } from "../src/text";
import { parseCount } from "../src/utils/count";
import { generate } from "../src/utils/generate";

test("generates the requested number of paragraphs", () => {
  const paragraphs = generate("paragraphs", 3).split("\n\n");
  assert.equal(paragraphs.length, 3);
  assert.ok(
    paragraphs.every((paragraph) => paragraph.split(".").length - 1 === 4),
  );
});

test("generates the requested number of sentences", () => {
  assert.equal(generate("sentences", 12).split(".").length - 1, 12);
  assert.equal(generate("sentences", 1), sentences[0]);
});

test("generates exactly the requested number of words", () => {
  assert.equal(generate("words", 100).split(" ").length, 100);
  assert.doesNotMatch(generate("words", 100), /[.،؟!]/u);
});

test("rejects unsupported units and out-of-range counts", () => {
  assert.throws(() => generate("words", 0), RangeError);
  assert.throws(() => generate("words", 101), RangeError);
  assert.throws(() => generate("words", 1.5), RangeError);
  assert.throws(() => generate("letters" as Unit, 2), TypeError);
});

test("parses valid counts and rejects malformed input", () => {
  assert.equal(parseCount(" 12 "), 12);
  assert.equal(parseCount("100"), 100);
  assert.equal(parseCount("0"), undefined);
  assert.equal(parseCount("101"), undefined);
  assert.equal(parseCount("1.5"), undefined);
  assert.equal(parseCount("01"), undefined);
});
