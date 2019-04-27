let Comment = require("./modals/comment");
let Photo = require("./modals/photo");
const express = require('express');
const app = express();
const ejs = require('ejs');
let bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(express.static("public"));
let mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/photo",{useNewUrlParser: true});

//schema setup

//Adding photo manully
/*Photo.create({
  imgURL : "/images/home/PeopleH.JPG",
  tag : "people",
  discription: "This is a People Image"

},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});
Photo.create({
  imgURL : "/images/home/RandomH.jpg",
  tag : "random",
  discription: "This is a random Image"

},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});
Photo.create({
  imgURL : "/images/home/FloraH.jpg",
  tag : "Flora & Fauna",
  discription: "This is a Flora & Fauna Image"

},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});
Photo.create({
  imgURL : "/images/home/FoodH.jpg",
  tag : "food",
  discription: "This is a food Image"

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
  Photo.find({},function(err, photos){
    if (err) {
      console.log(err);
    }else {
      res.render("categories",{photos : photos});
    }
  });
});
/*==========================Akanksha======================================*/
/*function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
  return next();

}*/
/*==========================Akanksha======================================*/
//Rendering Index
app.get("/",function(req,res){
  res.render("index");
});

app.post("/categories/:id/comment",function(req,res){
  Photo.findById(req.params.id,function(error,photo){
    if (error) {
      console.log(error);
      res.redirect("/categories");
    }else{
      Comment.create(req.body.comment, function(err,commentData){
        if (err) {
          console.log(err);
        }else {
          //commentData.author.username = req.user.username;
          //.author._id = req.user._id;
          photo.comments.push(commentData);
          console.log(photo);
          photo.save();
          console.log(commentData);
          res.redirect("/categories/" + photo._id);
        }
      })
    }
  })
});

//rendering Comment
app.get("/categories/:id",function(req,res){
  Photo.findById(req.params.id).populate("comments").exec(function(err,photo){
    if (err) {
      console.log(err);
    }else {
      res.render("show", {photo: photo});
    }
  })
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
