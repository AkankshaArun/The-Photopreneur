let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationFood(){
  Photo.updateOne({ fileName: "food_small_1.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_2.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_3.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_4.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_5.jpg"},{ $set: { latitude: '25.5941' ,longitude :'85.1376'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_6.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_7.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_8.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_9.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_10.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_11.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_12.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_13.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_14.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_15.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_16.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_17.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_18.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_19.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_20.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_21.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_22.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_23.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_24.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_25.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_26.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_27.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_28.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_29.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_30.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_31.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_32.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_33.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_34.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_35.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_36.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_37.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_38.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_39.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  })
  Photo.updateOne({ fileName: "food_small_40.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_41.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_42.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_43.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_44.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_45.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_46.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_47.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_48.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_49.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_50.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_51.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_52.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_53.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_54.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_55.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_56.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_57.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_58.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_59.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_60.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_61.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_62.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_63.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_64.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "food_small_65.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error food");
    }else{
      console.log("Success");
    }
  });

    }

module.exports = locationFood;
