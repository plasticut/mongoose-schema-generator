/* 
	Model:		CHARACTER_SETS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var CHARACTER_SETS = new mongoose.Schema({ 
  "CHARACTER_SET_NAME": { "type": String }, 
  "DEFAULT_COLLATE_NAME": { "type": String }, 
  "DESCRIPTION": { "type": String }, 
  "MAXLEN": { "type": Number } 
}); 
exports.CHARACTER_SETS = mongoose.model("CHARACTER_SETS", CHARACTER_SETS);