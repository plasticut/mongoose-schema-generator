/* 
	Model:		KEY_COLUMN_USAGE 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var KEY_COLUMN_USAGE = new mongoose.Schema({ 
  "CONSTRAINT_CATALOG": { "type": String }, 
  "CONSTRAINT_SCHEMA": { "type": String }, 
  "CONSTRAINT_NAME": { "type": String }, 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "COLUMN_NAME": { "type": String }, 
  "ORDINAL_POSITION": { "type": Number }, 
  "POSITION_IN_UNIQUE_CONSTRAINT": { "type": Number }, 
  "REFERENCED_TABLE_SCHEMA": { "type": String }, 
  "REFERENCED_TABLE_NAME": { "type": String }, 
  "REFERENCED_COLUMN_NAME": { "type": String } 
}); 
exports.KEY_COLUMN_USAGE = mongoose.model("KEY_COLUMN_USAGE", KEY_COLUMN_USAGE);