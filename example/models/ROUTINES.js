/* 
	Model:		ROUTINES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var ROUTINES = new mongoose.Schema({ 
  "SPECIFIC_NAME": { "type": String }, 
  "ROUTINE_CATALOG": { "type": String }, 
  "ROUTINE_SCHEMA": { "type": String }, 
  "ROUTINE_NAME": { "type": String }, 
  "ROUTINE_TYPE": { "type": String }, 
  "DTD_IDENTIFIER": { "type": String }, 
  "ROUTINE_BODY": { "type": String }, 
  "ROUTINE_DEFINITION": { "type": undefined }, 
  "EXTERNAL_NAME": { "type": String }, 
  "EXTERNAL_LANGUAGE": { "type": String }, 
  "PARAMETER_STYLE": { "type": String }, 
  "IS_DETERMINISTIC": { "type": String }, 
  "SQL_DATA_ACCESS": { "type": String }, 
  "SQL_PATH": { "type": String }, 
  "SECURITY_TYPE": { "type": String }, 
  "CREATED": { "type": Date }, 
  "LAST_ALTERED": { "type": Date }, 
  "SQL_MODE": { "type": undefined }, 
  "ROUTINE_COMMENT": { "type": String }, 
  "DEFINER": { "type": String } 
}); 
exports.ROUTINES = mongoose.model("ROUTINES", ROUTINES);