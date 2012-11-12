/* 
	Model:		PROFILING 
	Comment:	 
*/ 
 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Schema.Types.ObjectId; 
 
var PROFILING = new mongoose.Schema({ 
  "QUERY_ID": { "type": Number }, 
  "SEQ": { "type": Number }, 
  "STATE": { "type": String }, 
  "DURATION": { "type": Number }, 
  "CPU_USER": { "type": Number }, 
  "CPU_SYSTEM": { "type": Number }, 
  "CONTEXT_VOLUNTARY": { "type": Number }, 
  "CONTEXT_INVOLUNTARY": { "type": Number }, 
  "BLOCK_OPS_IN": { "type": Number }, 
  "BLOCK_OPS_OUT": { "type": Number }, 
  "MESSAGES_SENT": { "type": Number }, 
  "MESSAGES_RECEIVED": { "type": Number }, 
  "PAGE_FAULTS_MAJOR": { "type": Number }, 
  "PAGE_FAULTS_MINOR": { "type": Number }, 
  "SWAPS": { "type": Number }, 
  "SOURCE_FUNCTION": { "type": String }, 
  "SOURCE_FILE": { "type": String }, 
  "SOURCE_LINE": { "type": Number } 
}); 
exports.PROFILING = mongoose.model("PROFILING", PROFILING);