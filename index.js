const express=require("express");

const app=express();

app.get('/api/main',function(resq,res){
    
    res.send("This is the route of API and Main")

}).listen(5000)