let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedPeople(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedPeople' removed People Photos ");
    for(var i=1;i<=65;i++){
      Photo.create({
        largeImgURL : "/images/People/people_"+i+".jpg",
        smallImgURL : "/images/small/people/people_small_"+i+".jpg",
        fileName: "people_small_"+i+".jpg",
        tag : "people",
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

module.exports = seedPeople;
