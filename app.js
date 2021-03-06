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

seedDB      = require("./seed"),
seedBeaches      = require("./seedBeaches"),
locationBeach      = require("./locationBeach"),
seedNature      = require("./seedNature"),
locationNature      = require("./locationNature"),
seedFood      = require("./seedFood"),
locationFood      = require("./locationFood"),
seedGolden    = require("./seedGolden"),
locationGolden      = require("./locationGolden"),
seedPeople    = require("./seedPeople"),
locationPeople      = require("./locationPeople"),
seedRandom    = require("./seedRandom"),
locationRandom      = require("./locationRandom"),
seedStructures    = require("./seedStructures"),
locationStructures      = require("./locationStructures"),
seedLights    = require("./seedLights"),
locationLights      = require("./locationLights"),
seedTravel    = require("./seedTravel"),
locationTravel      = require("./locationTravel"),

ejs = require('ejs');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var nodemailer = require("nodemailer");

var logFlag=false;

// // configure dotenv
require('dotenv').config();
var indexRoutes      = require("./routes/index");

//seedDB
// seedNature();
// seedBeaches();
// seedFood();
// seedGolden();
// seedStructures();
// seedPeople();
// seedLights();
// seedRandom();
// seedTravel();
//locationNature();
//locationBeach();
//locationFood();
//locationGolden();
//locationPeople();
//locationRandom();
//locationStructures();
//locationLights();
//locationTravel();



mongoose.set('useCreateIndex', true);
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://photopreneur:******@mongodb-shard-00-00-ijrzw.mongodb.net:27017,mongodb-shard-00-01-ijrzw.mongodb.net:27017,mongodb-shard-00-02-ijrzw.mongodb.net:27017/photopreneur?ssl=true&replicaSet=MongoDB-shard-0&authSource=admin&retryWrites=true",{useNewUrlParser: true});
var indexRoutes = require("./routes/index");
// var contactRoutes = require("./routes/contact");

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

  app.post("/categories",function(req,res){
    Photo.find({ tag: req.body.group},function(err, photos){
      if (err) {
        console.log(err);
      }else {
        console.log(req.body.group);
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
        console.log(photo);
        Photo.updateOne({ _id: req.params.id},{ $inc: { views: 1 }, },{new: true },function(err,res){
          if(err){
            console.log(err);
          }else {
            console.log(res);
          }
        })
        res.render("show", {photo: photo});
      }
    })
  });
  //like button

  // app.post('/categories/:id/act',isLoggedIn, function(req, res) {
  //   Photo.updateOne({_id: req.params.id}, {$inc: {like: 1}}, {new: true },function(err,responce){
  //     if (err) {
  //       console.log(err);
  //     }else {
  //       console.log(responce);
  //     }
  //     res.redirect("/categories/" + req.params.id);
  //   });
  // });

  function isLoggedIn(req, res, next){
      if(req.isAuthenticated()){
          return next();
      }
      logFlag=true;
      console.log(logFlag);
      console.log("==================");
      res.render("login", {logFlag:logFlag});
  }
  //download
  app.get('/download/:id',isLoggedIn ,function(req, res, next){
    Photo.findById(req.params.id ,function(err,photo){
      if (err) {
        console.log(err);
      }else {
        var file = __dirname + "/public/" + photo.largeImgURL;
        console.log(file);
        res.download(file); // Set disposition and send it.
      }
    });
  });

  app.use("/", indexRoutes);
  // app.use("/campgrounds/:id/comments", commentRoutes);

app.use("/termsOfUse",function(req,res){
  res.render("terms");
})
app.use("*",function(req,res){
  res.render("unavailable");
})
  app.listen("3000",function(){
    console.log("Server Is Responding");
  });
