/* 
	Model:		STATISTICS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var STATISTICS = new mongoose.Schema({ 
  "TABLE_CATALOG": { "type": String }, 
  "TABLE_SCHEMA": { "type": String }, 
  "TABLE_NAME": { "type": String }, 
  "NON_UNIQUE": { "type": Number }, 
  "INDEX_SCHEMA": { "type": String }, 
  "INDEX_NAME": { "type": String }, 
  "SEQ_IN_INDEX": { "type": Number }, 
  "COLUMN_NAME": { "type": String }, 
  "COLLATION": { "type": String }, 
  "CARDINALITY": { "type": Number }, 
  "SUB_PART": { "type": Number }, 
  "PACKED": { "type": String }, 
  "NULLABLE": { "type": String }, 
  "INDEX_TYPE": { "type": String }, 
  "COMMENT": { "type": String } 
}); 
exports.STATISTICS = mongoose.model("STATISTICS", STATISTICS);