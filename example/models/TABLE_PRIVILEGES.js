/* 
	Model:		TABLE_PRIVILEGES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var TABLE_PRIVILEGES = new mongoose.Schema({ 
  "GRANTEE": { "type": String }, 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "PRIVILEGE_TYPE": { "type": String }, 
  "IS_GRANTABLE": { "type": String } 
}); 
exports.TABLE_PRIVILEGES = mongoose.model("TABLE_PRIVILEGES", TABLE_PRIVILEGES);