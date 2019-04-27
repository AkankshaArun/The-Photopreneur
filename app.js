const express = require('express'),
app         = express(),
 bodyParser  = require("body-parser"),
 mongoose    = require("mongoose"),
 flash       = require("connect-flash"),
 passport    = require("passport"),
 LocalStrategy = require("passport-local"),
 methodOverride = require("method-override"),
 Comment     = require("./models/comment"),
 User        = require("./models/user"),
 Photo       = require("./models/photo"),
 ejs = require('ejs');
// // configure dotenv
require('dotenv').config();
var indexRoutes      = require("./routes/index");

mongoose.set('useCreateIndex', true);
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/photopreneur",{useNewUrlParser: true});
var indexRoutes = require("./routes/index");

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Once again Rusty wins cutest dog!",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();});


app.get("/categories",function(req,res){
  Photo.find({},function(err, photos){
    if (err) {
      console.log(err);
    }else {
      res.render("categories",{photos : photos});
    }
  });
});
//Rendering Index
app.get("/",function(req,res){
  res.render("index");
});

app.post("/categories/:id/comment",isLoggedIn,function(req,res){
  Photo.findById(req.params.id,function(error,photo){
    if (error) {
      console.log(error);
      res.redirect("/categories");
    }else{
      Comment.create(req.body.comment, function(err,commentData){
        if (err) {
          console.log(err);
        }else {
          commentData.author.username = req.user.username;
          commentData.author.id = req.user._id;
          commentData.save();
          console.log(commentData);
          photo.comments.push(commentData);
          photo.save();
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
  tag : "floraFauna",
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
Photo.create({
  imgURL : "/images/home/ArchitectureH.JPG",
  tag : "architectural",
  discription: "This is a architectural Image"
},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});
Photo.create({
  imgURL : "/images/home/GoldenH.JPG",
  tag : "goldenHour",
  discription: "This is a goldenHour Image"
},function(err,added){
  if (err) {
    console.log(err);
  }else {
    console.log(added);
  }
});*/

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.use("/", indexRoutes);
// app.use("/campgrounds/:id/comments", commentRoutes);

app.listen("3000",function(){
  console.log("Server Is Responding");
});
