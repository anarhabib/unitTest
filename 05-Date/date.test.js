const {getDaysDifference} = require("./date")

describe("GetDaysDifference function:" , () => {
    test("should retrun expected days" , ()=> {
        expect(getDaysDifference(new Date(2023 , 5 ,13) , new Date(2023 , 6 ,21))).toBe(38);
    })
})