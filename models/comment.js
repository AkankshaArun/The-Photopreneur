let mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    //username: String
  },
  date: Date
});

module.exports = new mongoose.model("comment",commentSchema);
