module.exports = function (srcSchema, callback) {

	//var util = require("util");	console.log("transform: " + util.inspect(schema, false, 1, true));	
	var srcTable,
		dstTable,
		tableName,
		srcColumn,		
		dstColumn,
		columnName,
		dstSchema	= [],
		typeMap		= {
			"varchar": "String",
			"char": "String",

			"tinyint": "Number",
			"smallint": "Number",
			"mediumint": "Number",
			"int": "Number",
			"bigint": "Number",

			"double": "Number",

			"datetime": "Date"
		};

	for (tableName in srcSchema) {		
		srcTable = srcSchema[tableName];

		dstTable = {
			name: tableName,
			comment: srcTable.comment,
			columns: []
		};
	
		for (columnName in srcTable.columns) {
			srcColumn = srcTable.columns[columnName];	

			if (srcColumn.key === "PRI" && srcColumn.extra === "auto_increment") continue;

			dstColumn = {
				name: columnName,
				comment: srcColumn.comment				
			};			

			if (srcColumn.referencedTable && 
				srcColumn.referencedColumn &&
				srcSchema[srcColumn.referencedTable].columns[srcColumn.referencedColumn].key === "PRI") {			

				dstColumn.ref = srcColumn.referencedTable;
				dstColumn.type = "ObjectId";
			} else {
				dstColumn.type = typeMap[srcColumn.dataType.toLowerCase()];
			}					

			dstTable.columns.push(dstColumn);
		}

		dstSchema.push(dstTable);
	};

	callback(null, dstSchema);
}