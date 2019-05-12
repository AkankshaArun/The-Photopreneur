let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationLights(){
  Photo.updateOne({ fileName: "lights_small_1.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_2.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_3.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_4.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_5.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_6.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_7.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_8.jpg"},{ $set: { latitude: '25.5949' ,longitude :'85.1376'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_9.jpg"},{ $set: { latitude: '25.5949' ,longitude :'85.1376'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_10.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_11.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_12.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_13.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_14.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_15.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_16.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_17.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_18.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_19.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_20.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_21.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_22.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_23.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_24.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_25.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "lights_small_26.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error lights");
    }else{
      console.log("Success");
    }
  });

    }

module.exports = locationLights;
