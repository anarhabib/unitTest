const { sum, subtract, multiply, divide } = require("./math");

describe("Sum function:", () => {
  test("should sum positive values as expected", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(2, 4)).toBe(6);
  });

  test("should sum negative values as expected", () => {
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-34, -36)).toBe(-70);
  });

  test("should sum negative and positive values as expected", () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(-5, 25)).toBe(20);
  });

  test("should sum float values as expected", () => {
    expect(sum(0.5, 0.4)).toBe(0.9);
    expect(sum(1.9, 2.4)).toBe(4.3);
    expect(sum(-0.4, 3.4)).toBe(3);
    expect(sum(-0.5, -0.6)).toBe(-1.1);
  });
});

describe("Subtract function:", () => {
  test("should subtract positive values as expected", () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(25, 10)).toBe(15);
  });

  test("should subtract negative values as expected", () => {
    expect(subtract(-5, -10)).toBe(5);
    expect(subtract(-100, -12)).toBe(-88);
  });

  test("should subtract negative and positive values as expected", () => {
    expect(subtract(-5, 15)).toBe(-20);
    expect(subtract(-200, 300)).toBe(-500);
  });

  test("should subtract float values as expected", () => {
    expect(subtract(-0.8, -0.2)).toBeCloseTo(-0.6);
    expect(subtract(-1.5, -3.5)).toBe(2);
    expect(subtract(-2.5, 4)).toBe(-6.5);
    expect(subtract(2.3, 0.3)).toBeCloseTo(2);
  });
});

describe("Divide function:" , () => {
    test("should divide positive values as expected" , ()=> {
        expect(divide(5,5)).toBe(1);
        expect(divide(25,5)).toBe(5);
    })

    test("should divide negative values as expected" , () => {
        expect(divide(-25 , -5)).toBe(5);
        expect(divide(-36 , 6)).toBe(-6);
    })

    test("should divide float values as expected" , ()=> {
        expect(divide(6.6 , 6)).toBeCloseTo(1.1);
        expect(divide(0.6 , 2)).toBeCloseTo(0.3);
        expect(divide(0.6 , -2)).toBeCloseTo(-0.3);
    })
});

describe("multiply function:" , () => {
    test("should multiply positive values as expected" , () => {
        expect(multiply(10,5)).toBe(50);
        
    })
    test("should multiply negative values as expected" , () => {
        expect(multiply(-5 ,-5)).toBe(25);
        expect(multiply(-5,5)).toBe(-25);
    })

    test("should multiply float values as expected" , () => {
        expect(multiply(0.5 , 0.6)).toBe(0.3)
        expect(multiply(0.4 , 4)).toBe(1.6);
        expect(multiply(-0.5 , -0.6)).toBe(0.3);
        expect(multiply(-0.5 , 0.6)).toBe(-0.3);
    })
})
