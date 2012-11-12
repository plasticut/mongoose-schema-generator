module.exports = function (connection, database, callback) {

	var sql = [
		"SELECT", [
			"tab.TABLE_NAME",
			"tab.TABLE_COMMENT",
			"col.COLUMN_NAME",
			"col.DATA_TYPE",
			"col.COLUMN_COMMENT",
			"col.COLUMN_KEY",
			"col.IS_NULLABLE",
			"col.COLUMN_DEFAULT",
			"col.EXTRA",
			"ref.REFERENCED_TABLE_NAME",
			"ref.REFERENCED_COLUMN_NAME"
		].join(", "),
		"FROM information_schema.TABLES as tab",
		"INNER JOIN information_schema.COLUMNS as col ON", [
			"tab.TABLE_SCHEMA=?",
			"tab.TABLE_SCHEMA=col.TABLE_SCHEMA",		
			"tab.TABLE_NAME=col.TABLE_NAME"
		].join(" AND "),
		"LEFT JOIN information_schema.KEY_COLUMN_USAGE as ref ON", [
			"tab.TABLE_SCHEMA=ref.TABLE_SCHEMA",
			"tab.TABLE_NAME=ref.TABLE_NAME",
			"ref.TABLE_SCHEMA=ref.REFERENCED_TABLE_SCHEMA",		
			"col.COLUMN_NAME=ref.COLUMN_NAME"
		].join(" AND "),
	].join(" ");

	connection.query(sql, [database], function (err, rows){

		if (err) return callback(err);

		var tables = {};

		rows.forEach(function (item){
			var table = tables[item.TABLE_NAME];
			if (!table) {
				table = {
					columns: {}, 
					comment: item.TABLE_COMMENT.split(';')[0]
				};
				tables[item.TABLE_NAME] = table;
			};

			table.columns[item.COLUMN_NAME] = {
				dataType: item.DATA_TYPE,
				key: item.COLUMN_KEY,
				comment: item.COLUMN_COMMENT,
				isNullable: item.IS_NULLABLE,
				extra: item.EXTRA,
				defaultValue: item.COLUMN_DEFAULT,
				referencedTable: item.REFERENCED_TABLE_NAME,
				referencedColumn: item.REFERENCED_COLUMN_NAME
			};			
		});
		
		callback(null, tables);
	});
};
