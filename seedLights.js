let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedLights(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedLights' removed Structures Photos ");
    for(var i=1;i<=26;i++){
      Photo.create({
        largeImgURL : "/images/Lights/lights_"+i+".jpg",
        smallImgURL : "/images/small/lights/lights_small_"+i+".jpg",
        fileName: "lights_small_"+i+".jpg",
        tag : "lights",
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

module.exports = seedLights;
