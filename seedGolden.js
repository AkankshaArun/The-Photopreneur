let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedGolden(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedGolden' removed Golden Photos ");
    for(var i=1;i<=56;i++){
      Photo.create({
        largeImgURL : "/images/GoldenHour/golden_"+i+".jpg",
        smallImgURL : "/images/small/golden/golden_small_"+i+".jpg",
        fileName: "golden_small_"+i+".jpg",
        tag : "golden",
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

module.exports = seedGolden;
