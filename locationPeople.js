let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationPeople(){
  Photo.updateOne({ fileName: "people_small_1.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_2.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_3.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_4.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_5.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_6.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_7.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_8.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_9.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_10.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_11.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_12.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_13.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_14.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_15.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_16.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_17.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_18.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_19.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_20.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_21.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_22.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_23.jpg"},{ $set: { latitude: '12.2958' ,longitude :'76.6394'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_24.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_25.jpg"},{ $set: { latitude: '12.2958' ,longitude :'76.6394'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_26.jpg"},{ $set: { latitude: '12.2958' ,longitude :'76.6394'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_27.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_28.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_29.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_30.jpg"},{ $set: { latitude: '12.8076' ,longitude :'74.8423'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_31.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_32.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_33.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_34.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_35.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_36.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_37.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_38.jpg"},{ $set: { latitude: '13.3409' ,longitude :'74.7421'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_39.jpg"},{ $set: { latitude: '13.3409' ,longitude :'74.7421'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  })
  Photo.updateOne({ fileName: "people_small_40.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_41.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_42.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_43.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_44.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_45.jpg"},{ $set: { latitude: '13.031359' ,longitude :'77.570244'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_46.jpg"},{ $set: { latitude: '11.6854' ,longitude :'76.1320'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_47.jpg"},{ $set: { latitude: '11.6854' ,longitude :'76.1320'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_48.jpg"},{ $set: { latitude: '11.6854' ,longitude :'76.1320'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_49.jpg"},{ $set: { latitude: '13.2234' ,longitude :'74.7373'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_50.jpg"},{ $set: { latitude: '13.3496' ,longitude :'74.7039'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_51.jpg"},{ $set: { latitude: '13.3496' ,longitude :'74.7039'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_52.jpg"},{ $set: { latitude: '13.3496' ,longitude :'74.7039'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_53.jpg"},{ $set: { latitude: '15.2993' ,longitude :'74.1240'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_54.jpg"},{ $set: { latitude: '15.4926' ,longitude :'73.7737'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_55.jpg"},{ $set: { latitude: '15.4926' ,longitude :'73.7737'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_56.jpg"},{ $set: { latitude: '15.2993' ,longitude :'74.1240'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_57.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_58.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_59.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_60.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_61.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_62.jpg"},{ $set: { latitude: '12.9369' ,longitude :'74.8045'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_63.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_64.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "people_small_65.jpg"},{ $set: { latitude: '12.9141' ,longitude :'74.8560'}},{new: true },function(err,msg){
    if(err){
      console.log("error people");
    }else{
      console.log("Success");
    }
  });

    }

module.exports = locationPeople;
