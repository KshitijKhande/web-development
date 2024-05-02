import express from "express";
import {fileURLtoPath} from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const app=express();
const port=3000;
const __dirname=dirname(fileURLtoPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'index3.js');
})

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});