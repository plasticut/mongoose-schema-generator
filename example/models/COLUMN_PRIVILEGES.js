/* 
	Model:		COLUMN_PRIVILEGES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var COLUMN_PRIVILEGES = new mongoose.Schema({ 
  "GRANTEE": { "type": String }, 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "COLUMN_NAME": { "type": String }, 
  "PRIVILEGE_TYPE": { "type": String }, 
  "IS_GRANTABLE": { "type": String } 
}); 
exports.COLUMN_PRIVILEGES = mongoose.model("COLUMN_PRIVILEGES", COLUMN_PRIVILEGES);