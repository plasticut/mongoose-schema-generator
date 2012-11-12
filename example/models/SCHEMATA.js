/* 
	Model:		SCHEMATA 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var SCHEMATA = new mongoose.Schema({ 
  "CATALOG_NAME": { "type": String }, 
  "SCHEMA_NAME": { "type": String }, 
  "DEFAULT_CHARACTER_SET_NAME": { "type": String }, 
  "DEFAULT_COLLATION_NAME": { "type": String }, 
  "SQL_PATH": { "type": String } 
}); 
exports.SCHEMATA = mongoose.model("SCHEMATA", SCHEMATA);