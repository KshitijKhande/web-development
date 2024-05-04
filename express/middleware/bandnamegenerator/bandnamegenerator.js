import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));
const port=3000;
let bandName='';

app.use(bodyParser.urlencoded({extended:true}));

function bandNamegenerator(req,res,next){
    bandName=req.body['firstname']+req.body['petname'];
    console.log(bandName);
    next();
}

app.use(bandNamegenerator);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/bandnamegenerator.html');
});

app.post('/submit',(req,res)=>{
    res.send(`Your Band Name is ${bandName}`);
});

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});
