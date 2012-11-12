/* 
	Model:		COLUMNS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var COLUMNS = new mongoose.Schema({ 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "COLUMN_NAME": { "type": String }, 
  "ORDINAL_POSITION": { "type": Number }, 
  "COLUMN_DEFAULT": { "type": undefined }, 
  "IS_NULLABLE": { "type": String }, 
  "DATA_TYPE": { "type": String }, 
  "CHARACTER_MAXIMUM_LENGTH": { "type": Number }, 
  "CHARACTER_OCTET_LENGTH": { "type": Number }, 
  "NUMERIC_PRECISION": { "type": Number }, 
  "NUMERIC_SCALE": { "type": Number }, 
  "CHARACTER_SET_NAME": { "type": String }, 
  "COLLATION_NAME": { "type": String }, 
  "COLUMN_TYPE": { "type": undefined }, 
  "COLUMN_KEY": { "type": String }, 
  "EXTRA": { "type": String }, 
  "PRIVILEGES": { "type": String }, 
  "COLUMN_COMMENT": { "type": String } 
}); 
exports.COLUMNS = mongoose.model("COLUMNS", COLUMNS);