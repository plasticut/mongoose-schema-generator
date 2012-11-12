/* 
	Model:		TRIGGERS 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var TRIGGERS = new mongoose.Schema({ 
  "TRIGGER_CATALOG": { "type": String }, 
  "TRIGGER_SCHEMA": { "type": String }, 
  "TRIGGER_NAME": { "type": String }, 
  "EVENT_MANIPULATION": { "type": String }, 
  "EVENT_OBJECT_CATALOG": { "type": String }, 
  "EVENT_OBJECT_SCHEMA": { "type": String }, 
  "EVENT_OBJECT_TABLE": { "type": String }, 
  "ACTION_ORDER": { "type": Number }, 
  "ACTION_CONDITION": { "type": undefined }, 
  "ACTION_STATEMENT": { "type": undefined }, 
  "ACTION_ORIENTATION": { "type": String }, 
  "ACTION_TIMING": { "type": String }, 
  "ACTION_REFERENCE_OLD_TABLE": { "type": String }, 
  "ACTION_REFERENCE_NEW_TABLE": { "type": String }, 
  "ACTION_REFERENCE_OLD_ROW": { "type": String }, 
  "ACTION_REFERENCE_NEW_ROW": { "type": String }, 
  "CREATED": { "type": Date }, 
  "SQL_MODE": { "type": undefined }, 
  "DEFINER": { "type": undefined } 
}); 
exports.TRIGGERS = mongoose.model("TRIGGERS", TRIGGERS);