import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

const app=express();
const port=3000;
const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/secretproject.html');
});

app.post('/submit',(req,res)=>{
    if (req.body['password']=='ILoveProgramming'){
        res.sendFile(__dirname+"/secret.html");
    }else{
        res.send('Incorrect Password');
    }
});

app.listen(port,()=>{
    console.log(`Server is running on server ${port}`);
})
