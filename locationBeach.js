let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationBeach(){
  Photo.updateOne({ fileName: "beach_small_1.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_2.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_3.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_4.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_5.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_6.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_7.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_8.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_9.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_10.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_11.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_12.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_13.jpg"},{ $set: { latitude: '13.3555' ,longitude :'74.7044'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_14.jpg"},{ $set: { latitude: '13.04900778' ,longitude :'74.7834345'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_15.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_16.jpg"},{ $set: { latitude: '15.4991' ,longitude :'73.7675'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_17.jpg"},{ $set: { latitude: '15.4991' ,longitude :'73.7675'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_18.jpg"},{ $set: { latitude: '15.5494' ,longitude :'73.7535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_19.jpg"},{ $set: { latitude: '15.5622' ,longitude :'73.7493'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_20.jpg"},{ $set: { latitude: '15.5494' ,longitude :'73.7535'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_21.jpg"},{ $set: { latitude: '15.5622' ,longitude :'73.7493'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });
  Photo.updateOne({ fileName: "beach_small_22.jpg"},{ $set: { latitude: '15.4991' ,longitude :'73.7675'}},{new: true },function(err,msg){
    if(err){
      console.log("error beach");
    }else{
      console.log(msg);
    }
  });

    }

module.exports = locationBeach;
