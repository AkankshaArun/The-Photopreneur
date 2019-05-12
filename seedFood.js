let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedFood(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedFood' removed Food Photos ");
    for(var i=1;i<=65;i++){
      Photo.create({
        largeImgURL : "/images/Food/food_"+i+".jpg",
        smallImgURL : "/images/small/food/food_small_"+i+".jpg",
        fileName: "food_small_"+i+".jpg",
        tag : "food",
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

module.exports = seedFood;
