/* 
	Model:		COLLATIONS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var COLLATIONS = new mongoose.Schema({ 
  "COLLATION_NAME": { "type": String }, 
  "CHARACTER_SET_NAME": { "type": String }, 
  "ID": { "type": Number }, 
  "IS_DEFAULT": { "type": String }, 
  "IS_COMPILED": { "type": String }, 
  "SORTLEN": { "type": Number } 
}); 
exports.COLLATIONS = mongoose.model("COLLATIONS", COLLATIONS);