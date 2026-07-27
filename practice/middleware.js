const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const blog=require("./routes/blog")

app.use('/',blog)
//logger for an application
const mylogger = function (req, res, next) {
    console.log(req.headers)
    req.name="Mansi";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    next()
}
app.use(mylogger)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  
});
app.get("/error", (req, res, next) => {
    const err = new Error("This is a custom error");
    next(err);
});
app.get('/', (req, res) => {
    res.send("Hello " +req.name)
})
app.get('/about', (req, res) => {
    res.send("Hello About")
})
app.get('/contact', (req, res) => {
    res.send("Hello contact")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})