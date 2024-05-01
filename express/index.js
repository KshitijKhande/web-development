//Exampple of running a express server
import express from "express";
const app=express();
const port=3000;

app.listen(port,() =>{
    console.log(`The server is running on port ${port}`);
})
