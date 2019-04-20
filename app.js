const express = require('express');
const app = express();
const ejs = require('ejs');
app.set("view engine","ejs");
app.use(express.static("public"));
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/photo",{useNewUrlParser: true});
//schema setup
var schema = new mongoose.Schema({
imgURL: String,
tag: String,
description: String
});
//model setup
var photo = new mongoose.model("photo",schema);
//Adding photo manully

/*photo.create({
  imgURL : "/images/home/RandomH.JPG",
  tag : "random",
  discription: "This is a random Image"

},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});
*/
//adding image to the website
/*app.post("/categories",function(req,res){
  var imgURL = req.body.name;
  var tag = req.body.image;
  var discription = req.body.discription;
  var value = {imgURL: imgURL, tag:tag, discription: discription}
  Campground.create(value,function(err, msg){
    if (err) {
      console.log(err);
    }else {
      console.log(msg);
      res.redirect("/categories");
    }
  });
});
*/
//Sending data to the page
app.get("/categories",function(req,res){
  photo.find({},function(err, photos){
    if (err) {
      console.log(err);
    }else {
      res.render("categories",{photos : photos});
    }
  });
});


//Rendering Index
app.get("/",function(req,res){
  res.render("index")
});

app.listen("3000",function(){
  console.log("Server Is Responding")
});
