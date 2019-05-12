let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationGolden(){
  Photo.updateOne({ fileName: "golden_small_1.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_2.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_3.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_4.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_5.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_6.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_7.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_8.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_9.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_10.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_11.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_12.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_13.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_14.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_15.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_16.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_17.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_18.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_19.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_20.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_21.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_22.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_23.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_24.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_25.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_26.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_27.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_28.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_29.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_30.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_31.jpg"},{ $set: { latitude: '12.4216' ,longitude :'76.5725'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_32.jpg"},{ $set: { latitude: '12.4216' ,longitude :'76.5725'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_33.jpg"},{ $set: { latitude: '12.4216' ,longitude :'76.5725'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_34.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_35.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_36.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_37.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_38.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_39.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_40.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_41.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_42.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_43.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_44.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_45.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_46.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_47.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_48.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_49.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_50.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_51.jpg"},{ $set: { latitude: '12.7862' ,longitude :'74.8535'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_52.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_53.jpg"},{ $set: { latitude: '11.6268' ,longitude :'76.2343'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_54.jpg"},{ $set: { latitude: '12.552915' ,longitude :'77.405369'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_55.jpg"},{ $set: { latitude: '12.8398' ,longitude :'74.8600'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "golden_small_56.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error golden");
    }else{
      console.log("Success");
    }
  });
    }

module.exports = locationGolden;
