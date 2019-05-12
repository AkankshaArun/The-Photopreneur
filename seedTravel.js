let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedTravel(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedTravel' removed Travel  Photos ");
    for(var i=1;i<=39;i++){
      Photo.create({
        largeImgURL : "/images/Travel/travel_"+i+".jpg",
        smallImgURL : "/images/small/travel/travel_small_"+i+".jpg",
        fileName: "travel_small_"+i+".jpg",
        tag : "travel",
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

module.exports = seedTravel;
