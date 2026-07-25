import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about',(req,res)=>{
    res.send('This is about page.');
});
app.get('/blog',(req,res)=>{
    res.send("blog");
});
app.get('/:slug',(req,res)=>{
    //logic to fetch {slug} from the db
    console.log(req.params);// will output [Object: null prototype] { slug: 'api' }
    res.send(`helloww ${req.params.slug}`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});