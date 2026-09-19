import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { add, formatGreeting } from "./lib.js";

describe("add", () => {
  it("sums two numbers", () => {
    assert.equal(add(2, 3), 5);
  });
});

describe("formatGreeting", () => {
  it("greets a trimmed name", () => {
    assert.equal(formatGreeting("  Younes "), "Hello, Younes");
  });

  it("rejects empty name", () => {
    assert.throws(() => formatGreeting("   "), /name is required/);
  });
});
