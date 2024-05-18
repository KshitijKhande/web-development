import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;


app.get('/',(req,res)=>{
    const data={
        date:new Date().getSeconds(),
        fruits:['apple','banana','grapes','watermelon','mango']
    }
    
   
    res.render('index.ejs',data);
});

app.listen(port,()=>{
    console.log(`This server is running on port ${port}`);

});
