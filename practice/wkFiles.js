const fs = require("fs")
//console.log(fs)
console.log("Starting")
//fs.writeFileSync("Mansi.txt","Hello Mansi")
fs.writeFile("Mansi1.txt", "Hello Mansi wassup", () => {
    console.log("Done")
    fs.readFile("Mansi1.txt", (error, data) => {
        console.log(error, data.toString())

    })
})

console.log("Ending")