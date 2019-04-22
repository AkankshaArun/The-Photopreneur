var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
// var async = require("async");
// var nodemailer = require("nodemailer");
// var crypto = require("crypto");

//root route
//Rendering Index
router.get("/",function(req,res){
  res.render("index");
});


router.get("/categories",function(req,res){
  res.render("categories");
});

router.get("/about",function(req,res){
  res.render("about");
});

router.get("/contact",function(req,res){
  res.render("contact");
});

router.get("/register",function(req,res){
  res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to The Photopreneur " + user.username);
           res.redirect("/");
        });
    });
});

router.get("/login",function(req,res){
  res.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
   req.logout();
   // req.flash("success", "Logged you out!");
   res.redirect("/");
});

// forgot password
router.get('/forgot', function(req, res) {
  res.render('forgot');
});

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'photopreneur.horizon@gmail.com',
          pass: process.env.GMAILPW
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'photopreneur.horizon@gmail.com',
        subject: 'The Photopreneur Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
