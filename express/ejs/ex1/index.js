import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.post('/name',(req,res)=>{
    const num=req.body['fname']+req.body['lname'];
    const numletters=num.length;
    res.render('index.ejs',{
        title:`Your Name has ${numletters} letters`,
    });
})

app.listen(port,()=>{
    console.log(`This server is running on port ${port}`);
});
