import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index4.html");
    // res.send('h');
});

app.post('/login',(req,res)=>{
    console.log(req.body);
});

app.listen(port,(req,res)=>{
    console.log(`Running on port ${port}`);
});
