const {validEmail} = require("./email")

describe("Valid Email function:" , () => {
    let email;

    beforeEach(() => {
      email = "anar@gmail.com";
    });
    test("should include @ and should not start @" , () => {
        expect(validEmail(email)).toBeTruthy();
        expect(validEmail("email.mail.com")).toBeFalsy();
        expect(validEmail("@mail.com")).toBeFalsy();
        expect(validEmail("email@gmail.az")).toBeFalsy();
    })
})