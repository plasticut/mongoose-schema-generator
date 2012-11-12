/* 
	Model:		VIEWS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var VIEWS = new mongoose.Schema({ 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "VIEW_DEFINITION": { "type": undefined }, 
  "CHECK_OPTION": { "type": String }, 
  "IS_UPDATABLE": { "type": String }, 
  "DEFINER": { "type": String }, 
  "SECURITY_TYPE": { "type": String } 
}); 
exports.VIEWS = mongoose.model("VIEWS", VIEWS);