const fs = require("fs")
//console.log(fs)
console.log("Starting")
//fs.writeFileSync("Mansi.txt","Hello Mansi")
fs.writeFile("Mansi1.txt", "Hello Mansi wassup", () => {
    console.log("Done")
    fs.readFile("Mansi1.txt", (error, data) => {
        console.log( data.toString())

    })
})
fs.appendFile("Mansi.txt","Welcome back!",(e)=>{
   if(e){
    console.log(e)
    return
   }
    console.log("Content appended successfully!");
        fs.readFile("Mansi.txt", (error, data) => {
        console.log( data.toString())

    })
})
console.log("Ending")