//jshint esversion:6 

const bodyParser = require("body-parser");
const express=require("express");
const ejs=require('ejs');
const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('home');
})

app.get('/adopt',function(req,res){
    res.render('adopt');
})

app.post('/',function(){
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
})

app.listen(3000,function(req,res){
    console.log("Server started at port 3000");
});