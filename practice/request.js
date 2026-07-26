const express = require("express");
const app = express();
const blog = require('./routes/blog');
const port = 3000;
app.use(express.static("public"));
app.use('/blog', blog);
app.get('/', (req, res) => {
    res.send("Get request ");
}).post('/', (req, res) => {
    res.send("Post request ");
    console.log("hello world post");
}).put('/', (req, res) => {
    res.send("put request ");
    console.log("hello world put");
}).delete('/', (req, res) => {
    res.send("Delete request");
    console.log("hello world delete");
});
app.get("/index", (req, res) => {
    res.sendFile('templates/index.html', { root: __dirname })
    console.log("Hey its index");
}).post("/api", (req, res) => {
    res.json({
        success: true,
        message: "data received",
        identity: "mansi"
    });
})
app.listen(port, () => {
    console.log(`app listen at port ${port}`);
})