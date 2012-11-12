/* 
	Model:		SCHEMA_PRIVILEGES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var SCHEMA_PRIVILEGES = new mongoose.Schema({ 
  "GRANTEE": { "type": String }, 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "PRIVILEGE_TYPE": { "type": String }, 
  "IS_GRANTABLE": { "type": String } 
}); 
exports.SCHEMA_PRIVILEGES = mongoose.model("SCHEMA_PRIVILEGES", SCHEMA_PRIVILEGES);