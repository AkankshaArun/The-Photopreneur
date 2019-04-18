const express = require('express');
const app = express();
const ejs = require('ejs');
app.set("view engine","ejs");
app.use(express.static("public"));

//Rendering Index
app.get("/",function(req,res){
  res.render("index");
});


app.get("/categories",function(req,res){
  res.render("categories");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.listen("3000",function(){
  console.log("Server Is Responding")
});
