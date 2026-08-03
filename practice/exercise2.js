//Generate a dummy data in this format in a collection called employees in a db called company
// {name:"Mansi",
//     salary:4500000,
// language:"Python",
// city:"New York",
// isManager:false
// }
// Generate 10 such record when a button called generate data is clicked
//create expess app with mongoose
//everytime button is clicked,you should clear the collection
import mongoose from "mongoose";
import express from "express";
import { dummy } from "./models/dummy.js";
const conn = await mongoose.connect("mongodb://localhost:27017/company");
const app = express()
const port = 3000
app.use(express.static("public"));
function generateEmployee() {

    const name = ["Mansi", "Rahul", "Aman"];
    const city = ["Delhi", "Mumbai", "New York"];
    const language = ["Python", "Java", "C++"];
    const salary = [10023, 44550, 44444];
    const isManager = [true, false];
   return {
    name: name[Math.floor(Math.random() * name.length)],
    city: city[Math.floor(Math.random() * city.length)],
    language: language[Math.floor(Math.random() * language.length)],
    salary: salary[Math.floor(Math.random() * salary.length)],
    isManager: isManager[Math.floor(Math.random() * isManager.length)]
};
}


app.post('/generate', async (req, res) => {
     await dummy.deleteMany({});
    let employees = [];

    for (let i = 0; i < 10; i++) {
        employees.push(generateEmployee());
    }
     await dummy.insertMany(employees);
  
    res.send("Done");

})
app.listen(port, () => {
    console.log(` app listening to ${port}`)
})