//jshint esversion:6
const express=require('express');
const app=express();

app.get("/", function(req,res){
res.send("testing");
});

app.listen(3000, function(){
console.log("server listen to port 3000");
});