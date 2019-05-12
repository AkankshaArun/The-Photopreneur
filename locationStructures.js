let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationStructures(){
  Photo.updateOne({ fileName: "structures_small_1.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_2.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_3.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_4.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_5.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_6.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_7.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_8.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_9.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_10.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_11.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_12.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_13.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_14.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_15.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_16.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_17.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_18.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_19.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_20.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_21.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_22.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_23.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_24.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_25.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_26.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_27.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_28.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_29.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_30.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_31.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_32.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_33.jpg"},{ $set: { latitude: '12.3051' ,longitude :'76.6551'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_34.jpg"},{ $set: { latitude: '12.3051' ,longitude :'76.6551'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_35.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_36.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_37.jpg"},{ $set: { latitude: '14.0940' ,longitude :'74.4899'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_38.jpg"},{ $set: { latitude: '14.09403' ,longitude :'4648991'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_39.jpg"},{ $set: { latitude: '13.0581' ,longitude :'75.4294'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_40.jpg"},{ $set: { latitude: '15.2993' ,longitude :'74.1240'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_41.jpg"},{ $set: { latitude: '25.6440' ,longitude :'85.1010'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_42.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8634'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_43.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_44.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_45.jpg"},{ $set: { latitude: '12.8580' ,longitude :'74.8405'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_46.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_47.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_48.jpg"},{ $set: { latitude: '12.9670' ,longitude :'77.5956'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_49.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "structures_small_50.jpg"},{ $set: { latitude: '12.8580' ,longitude :'74.8405'}},{new: true },function(err,msg){
    if(err){
      console.log("error sturctures");
    }else{
      console.log("Success");
    }
  });

    }

module.exports = locationStructures;
