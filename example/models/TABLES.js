/* 
	Model:		TABLES 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var TABLES = new mongoose.Schema({ 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "TABLE_TYPE": { "type": String }, 
  "ENGINE": { "type": String }, 
  "VERSION": { "type": Number }, 
  "ROW_FORMAT": { "type": String }, 
  "TABLE_ROWS": { "type": Number }, 
  "AVG_ROW_LENGTH": { "type": Number }, 
  "DATA_LENGTH": { "type": Number }, 
  "MAX_DATA_LENGTH": { "type": Number }, 
  "INDEX_LENGTH": { "type": Number }, 
  "DATA_FREE": { "type": Number }, 
  "AUTO_INCREMENT": { "type": Number }, 
  "CREATE_TIME": { "type": Date }, 
  "UPDATE_TIME": { "type": Date }, 
  "CHECK_TIME": { "type": Date }, 
  "TABLE_COLLATION": { "type": String }, 
  "CHECKSUM": { "type": Number }, 
  "CREATE_OPTIONS": { "type": String }, 
  "TABLE_COMMENT": { "type": String } 
}); 
exports.TABLES = mongoose.model("TABLES", TABLES);