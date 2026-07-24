import fs from "fs/promises"
// file system module
let a = await fs.readFile("Mansi.txt")
console.log(a.toString())
let b = await fs.writeFile("Mansi.txt", "This is a promise")
let c = await fs.readFile("Mansi.txt")
console.log(c.toString())
