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

mongoose.set('useCreateIndex', true);
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/photopreneur",{useNewUrlParser: true});
var indexRoutes = require("./routes/index");

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

app.use("/", indexRoutes);
// app.use("/campgrounds/:id/comments", commentRoutes);


app.listen("3000",function(){
  console.log("Server Is Responding")
});
