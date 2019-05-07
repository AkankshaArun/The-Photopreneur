let mongoose = require("mongoose");

var photoSchema = new mongoose.Schema({
largeImgURL: String,
smallImgURL: String,
fileName: String,
orientation: Boolean,
//horizontal = true and vertical as false
color: String,
//color can be Red,Green,Blue,yellow,mustard,skyblue,purple,white,black,brown
tag: String
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
location: String,
latitude: Number,
longitude: Number
});
//model setup
module.exports =  mongoose.model("Photo",photoSchema);
