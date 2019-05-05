let mongoose = require("mongoose");

var photoSchema = new mongoose.Schema({
largeImgURL: String,
smallImgURL: String,
fileName: String,
orientation: Boolean,
//horizontal = true and vertical as false
color: String,
//color can be Red,Green,Blue,yellow,mustard,skyblue,purple,white,black,brown
tag: String,
cameraDetails : String,
date : { type: Date, default: Date.now },
// author: {
//       id: {
//          type: mongoose.Schema.Types.ObjectId,
//          ref: "User"
//       },
//       username: String
//    },
comments : [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }
],
like : { type: Number, default: 0 },
views: {type :Number, default: 0},
tags : [
  {
    type: Array
  }
],
latitude: Number,
longitude: Number,
imgType: String,
resolution :String
});
//model setup
module.exports =  mongoose.model("Photo",photoSchema);
