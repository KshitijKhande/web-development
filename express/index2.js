import express from "express";
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('<h1>hello world<h1>');
    

});
app.get('/one',(req,res)=>{
    res.send('<h1>one two</h1>');
});




app.listen(port,()=>{
    console.log(`This server is running on port ${port}`);
});