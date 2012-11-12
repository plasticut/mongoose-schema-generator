/* 
	Model:		COLLATION_CHARACTER_SET_APPLICABILITY 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var COLLATION_CHARACTER_SET_APPLICABILITY = new mongoose.Schema({ 
  "COLLATION_NAME": { "type": String }, 
  "CHARACTER_SET_NAME": { "type": String } 
}); 
exports.COLLATION_CHARACTER_SET_APPLICABILITY = mongoose.model("COLLATION_CHARACTER_SET_APPLICABILITY", COLLATION_CHARACTER_SET_APPLICABILITY);