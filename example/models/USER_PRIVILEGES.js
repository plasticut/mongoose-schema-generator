/* 
	Model:		USER_PRIVILEGES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var USER_PRIVILEGES = new mongoose.Schema({ 
  "GRANTEE": { "type": String }, 
  "TABLE_CATALOG": { "type": String }, 
  "PRIVILEGE_TYPE": { "type": String }, 
  "IS_GRANTABLE": { "type": String } 
}); 
exports.USER_PRIVILEGES = mongoose.model("USER_PRIVILEGES", USER_PRIVILEGES);