const { returnEvenNumbers } = require("./array");

describe("Return Even Numbers function:", () => {
  let array;

  beforeEach(() => {
    array = [5, 10, 15, 21, 22, undefined, false, "", "hello", null];
  });

  test("should be defined", () => {
    expect(returnEvenNumbers).toBeDefined();
  });

  test("should not contain not number values", () => {
    expect(returnEvenNumbers(array)).not.toContain(5);
    expect(returnEvenNumbers(array)).not.toContain(15);
    expect(returnEvenNumbers(array)).not.toContain(21);
    expect(returnEvenNumbers(array)).not.toContain(undefined);
    expect(returnEvenNumbers(array)).not.toContain("");
    expect(returnEvenNumbers(array)).not.toContain("hello");
    expect(returnEvenNumbers(array)).not.toContain(null);
  });

  test("should return even numbers", () => {
    const result = [10, 22];
    expect(returnEvenNumbers(array)).toEqual(result);
  });
});
