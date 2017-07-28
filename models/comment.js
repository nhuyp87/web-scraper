
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  
  title: {
    type: String
  },
  
  body: {
    type: String
  }
});


var Comments = mongoose.model("Comment", CommentSchema);
module.exports = Comments;
