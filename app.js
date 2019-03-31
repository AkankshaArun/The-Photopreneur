const express = require('express');
const app = express();
const ejs = require('ejs');
app.set("view engine","ejs");
app.use(express.static("public"));

//Rendering Index
app.get("/",function(req,res){
  res.render("index")
});

app.listen("3000",function(){
  console.log("Server Is Responding")
});
