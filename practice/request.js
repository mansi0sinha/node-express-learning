const express=require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Get request ");
}).post('/', (req, res) => {
    res.send("Post request ");
    console.log("hello world post");
}).put('/', (req, res) => {
    res.send("put request ");
    console.log("hello world put");
}).delete('/',(req,res)=>{
    res.send("Delete request");
    
    console.log("hello world delete");
});
app.get("/index",(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
    console.log("Hey its index");
})
app.listen(port, () => {
    console.log(`app listen at port ${port}`);
})