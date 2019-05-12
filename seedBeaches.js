let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedBeaches(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedBeaches' removed Beaches Photos");
    for(var i=1;i<=22;i++){
      Photo.create({
        largeImgURL : "/images/Beach/beach_"+i+".jpg",
        smallImgURL : "/images/small/beach/beach_small_"+i+".jpg",
        fileName: "beach_small_"+i+".jpg",
        tag : "beach",
        orientation: true,
        like : 0,
        views :0,
        imgType: "JPG"
      },function(err,added){
        if (err) {
          console.log(err);
        }else {
          console.log("added");
        }
      });
    }
  });
}

module.exports = seedBeaches;
