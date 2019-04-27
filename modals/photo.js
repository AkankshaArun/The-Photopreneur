let mongoose = require("mongoose");
let comment = require("./comment")

var photoSchema = new mongoose.Schema({
imgURL: String,
tag: String,
description: String,
cameraDetails : String,
date : { type: Date, default: Date.now },
comments : [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment"
  }
],
like : Number
});
//model setup
module.exports =  new mongoose.model("photo",photoSchema);
