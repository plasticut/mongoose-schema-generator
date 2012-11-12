var util 			= require("util"),
	config 			= require(process.argv[2]),
	mysql			= require("mysql"),
	schemator		= require("./schemator.js"),
	transformator	= require("./transformator.js"),
	generator 		= require("./generator.js"),
	connection 		= mysql.createConnection(config.connection);

connection.connect(function (err){

	if (err) return console.log("connection error: " + util.inspect(err));

	schemator(connection, config.database, function (err, schema){
		if (err) return console.log("schemator error: " + err);

		connection.end();	

		transformator(schema, function (err, schema){
			if (err) return console.log("transformator error: " + err);	

			generator(schema, config.output.folder, function (err, res){
				if (err) return console.log("generator error: " + err);

			});

		});
	});	
});

