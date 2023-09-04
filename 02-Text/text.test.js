const {reverseString} = require("./text")

describe("ReverseString function:" , () => {
    test("shoul reverse strings" , () => {
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("Hello")).toBe("olleH");
        expect(reverseString("HellO")).toBe("OlleH");
        expect(reverseString(" hel lo ")).toBe("ol leh");

    })
})