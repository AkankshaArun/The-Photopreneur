let mongoose = require("mongoose");

var photoSchema = new mongoose.Schema({
imgURL: String,
tag: String,
description: String,
cameraDetails : String,
date : { type: Date, default: Date.now },
comments : [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }
],
like : Number
});
//model setup
module.exports =  mongoose.model("Photo",photoSchema);
