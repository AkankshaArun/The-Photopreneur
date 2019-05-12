let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationRandom(){
  Photo.updateOne({ fileName: "random_small_1.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_2.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_3.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_4.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_5.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_6.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_7.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_8.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_9.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_10.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_11.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_12.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_13.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_14.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_15.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_16.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_17.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_18.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_19.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_20.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_21.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_22.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_23.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_24.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_25.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_26.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_27.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_28.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_29.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_30.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_31.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_32.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_33.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_34.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_35.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_36.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "random_small_37.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error random");
    }else{
      console.log("Success");
    }
  });

}
module.exports = locationRandom;
