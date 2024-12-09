import { describe, it, expect } from "vitest";

describe("Hello World Test", () => {
  it("Print Hello World", () => {
    const message = "Hello World";
    console.log(message);
    expect(message).toBe("Hello World");
  });
});
