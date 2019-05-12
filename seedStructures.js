let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedStructures(){
  Photo.deleteMany({},function(err){
    if(err){
      console.log(err);
    }
    console.log("From: 'seedStructures' removed Structures Photos ");
    for(var i=1;i<=50;i++){
      Photo.create({
        largeImgURL : "/images/Structures/structures_"+i+".jpg",
        smallImgURL : "/images/small/structures/structures_small_"+i+".jpg",
        fileName: "structures_small_"+i+".jpg",
        tag : "structures",
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

module.exports = seedStructures;
