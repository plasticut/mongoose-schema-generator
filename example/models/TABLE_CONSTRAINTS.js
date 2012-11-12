/* 
	Model:		TABLE_CONSTRAINTS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var TABLE_CONSTRAINTS = new mongoose.Schema({ 
  "CONSTRAINT_CATALOG": { "type": String }, 
  "CONSTRAINT_SCHEMA": { "type": String }, 
  "CONSTRAINT_NAME": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "CONSTRAINT_TYPE": { "type": String } 
}); 
exports.TABLE_CONSTRAINTS = mongoose.model("TABLE_CONSTRAINTS", TABLE_CONSTRAINTS);