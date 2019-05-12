let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedRandom(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedRandom' removed Random Photos ");
    for(var i=1;i<=37;i++){
      Photo.create({
        largeImgURL : "/images/Random/random_"+i+".jpg",
        smallImgURL : "/images/small/random/random_small_"+i+".jpg",
        fileName: "random_small_"+i+".jpg",
        tag : "random",
        orientation: true,
        like : 0,
        views :0,
        imgType: "JPG"
      },function(err,added){
        if (err) {
          console.log(err);
        }else {
          console.log(added);
        }
      });
    }
  });
}

module.exports = seedRandom;
