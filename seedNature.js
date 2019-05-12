let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedNature(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedNature' removed Nature Photos ");
    for(var i=1;i<=95;i++){
      Photo.create({
        largeImgURL : "/images/Nature/nature_"+i+".jpg",
        smallImgURL : "/images/small/nature/nature_small_"+i+".jpg",
        fileName: "nature_small_"+i+".jpg",
        tag : "nature",
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

module.exports = seedNature;
