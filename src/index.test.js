import hello from ".";

describe("it should say hello", () => {
  it("should greet 'Lian'", () => {
    expect(hello()).toBe("Hello, Lian");
  });

  it("should greet 'Pepe'", () => {
    expect(hello("Pepe")).toBe("Hello, Pepe");
  });
});