let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function locationNature(){
  Photo.updateOne({ fileName: "nature_small_1.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_2.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_3.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_4.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_5.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_6.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_7.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_8.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_9.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_10.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_11.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_12.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_13.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_14.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_15.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_16.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_17.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_18.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_19.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_20.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_21.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_22.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_23.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_24.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_25.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_26.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_27.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_28.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_29.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_30.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_31.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_32.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_33.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_34.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_35.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_36.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_37.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_38.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_39.jpg"},{ $set: { latitude: '12.2753' ,longitude :'76.6701'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  })
  Photo.updateOne({ fileName: "nature_small_40.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_41.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_42.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_43.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_44.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_45.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_46.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_47.jpg"},{ $set: { latitude: '12.9763' ,longitude :'77.5929'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_48.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_49.jpg"},{ $set: { latitude: '12.8913' ,longitude :'74.8139'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_50.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_51.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_52.jpg"},{ $set: { latitude: '12.3579' ,longitude :'76.6003'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_53.jpg"},{ $set: { latitude: '12.3022' ,longitude :'76.6640'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_54.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_55.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_56.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_57.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_58.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_59.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_60.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_61.jpg"},{ $set: { latitude: '13.1155' ,longitude :'75.3828'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_62.jpg"},{ $set: { latitude: '13.3409' ,longitude :'74.7421'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_63.jpg"},{ $set: { latitude: '25.5994' ,longitude :'85.0989'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_64.jpg"},{ $set: { latitude: '25.5994' ,longitude :'85.0989'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_65.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_66.jpg"},{ $set: { latitude: '11.6854' ,longitude :'76.1320'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_67.jpg"},{ $set: { latitude: '11.6645' ,longitude :'76.1902'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_68.jpg"},{ $set: { latitude: '11.6854' ,longitude :'76.1320'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_69.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_70.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_71.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_72.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_73.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_74.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_75.jpg"},{ $set: { latitude: '15.2993' ,longitude :'74.1240'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_76.jpg"},{ $set: { latitude: '13.0448' ,longitude :'77.6221'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_77.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_78.jpg"},{ $set: { latitude: '13.031359' ,longitude :'77.570244'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_79.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_80.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_81.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_82.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_83.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_84.jpg"},{ $set: { latitude: '12.8580' ,longitude :'74.8405'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_85.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_86.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_87.jpg"},{ $set: { latitude: '15.2993' ,longitude :'74.1240'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_88.jpg"},{ $set: { latitude: '13.3702' ,longitude :'77.6835'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_89.jpg"},{ $set: { latitude: '12.9716' ,longitude :'77.5946'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_90.jpg"},{ $set: { latitude: '12.9048' ,longitude :'74.8364'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_91.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_92.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_93.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_94.jpg"},{ $set: { latitude: '12.9052' ,longitude :'74.8346'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });
  Photo.updateOne({ fileName: "nature_small_95.jpg"},{ $set: { latitude: '12.8049' ,longitude :'74.9457'}},{new: true },function(err,msg){
    if(err){
      console.log("error nature");
    }else{
      console.log("Success");
    }
  });


    }

module.exports = locationNature;
