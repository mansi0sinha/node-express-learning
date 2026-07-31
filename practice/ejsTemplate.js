const express=require("express")
const app=express()
const port=3000
app.set("view engine",'ejs');
app.get('/',(req,res)=>{
    let siteName="Adidas"
    let searchText="searchNow"
    let arr=["Home","Action"]
    res.render("index",{siteName:siteName,searchText:searchText,arr})
})
app.get('/blog/:slug',(req,res)=>{
    let blogTitle="Blog Page"
    let blogContent="Blog Content"
    res.render('blogpost',{blogTitle:blogTitle,blogContent:blogContent})
})
app.listen(port,()=>{
    console.log(`Express app listening on ${port}`)
})