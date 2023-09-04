const validEmail = (email) => {
if(typeof(email) !== "string"){
    throw new Error("Invalid input")
}
return email.includes("@") && email.endsWith(".com") && !email.startsWith("@")
}

module.exports = {validEmail}