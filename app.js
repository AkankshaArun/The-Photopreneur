const express = require('express'),
app         = express(),
 bodyParser  = require("body-parser"),
 mongoose    = require("mongoose"),
 flash       = require("connect-flash"),
 passport    = require("passport"),
 LocalStrategy = require("passport-local"),
 methodOverride = require("method-override"),
 // Comment     = require("./models/comment"),
 User        = require("./models/user"),
 ejs = require('ejs');
app.set("view engine","ejs");

// // configure dotenv
// require('dotenv').load();


//requiring routes
// const commentRoutes    = require("./routes/comments");
var indexRoutes      = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/photopreneur",{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


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
