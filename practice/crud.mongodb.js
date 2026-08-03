//CRUD operations
//Create database CrudDB
use("CrudDB")
db.createCollection("courses")
//Insert Data
// db.courses.insertOne({
//     name:"Web Dev free course",
//     price:0,
//     assignment:12,
//     project:45

// })
// db.courses.insertMany(
//    [
//   {
//     "name": "Web Development Bootcamp",
//     "price": 0,
//     "assignment": 12,
//     "project": 45
//   },
//   {
//     "name": "JavaScript Mastery",
//     "price": 499,
//     "assignment": 18,
//     "project": 20
//   },
//   {
//     "name": "React JS Complete Course",
//     "price": 999,
//     "assignment": 25,
//     "project": 15
//   },
//   {
//     "name": "Node.js & Express",
//     "price": 799,
//     "assignment": 20,
//     "project": 18
//   },
//   {
//     "name": "MongoDB for Beginners",
//     "price": 299,
//     "assignment": 10,
//     "project": 8
//   },
//   {
//     "name": "MERN Stack Development",
//     "price": 1999,
//     "assignment": 35,
//     "project": 30
//   },
//   {
//     "name": "Data Structures in C++",
//     "price": 1499,
//     "assignment": 40,
//     "project": 10
//   },
//   {
//     "name": "System Design Basics",
//     "price": 1299,
//     "assignment": 15,
//     "project": 12
//   },
//   {
//     "name": "Python Programming",
//     "price": 599,
//     "assignment": 22,
//     "project": 14
//   },
//   {
//     "name": "Full Stack Interview Prep",
//     "price": 2499,
//     "assignment": 50,
//     "project": 25
//   }
// ])
//Read Data
let a=db.courses.find({price:0})
let b=db.courses.findOne({price:0})
console.log(a.toArray())
console.log(b)
//Update Data
db.courses.updateOne({price:0},{$set:{price:100}})
//Delete Data
db.courses.deleteMany({price:0})
