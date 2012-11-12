module.exports = function (schema, folder, callback) {
	try {
		var fs				= require("fs"),
			path			= require("path"),
			ejs 			= require("ejs"),
			util 			= require("util"),
			template 		= fs.readFileSync(__dirname + "/template.ejs", "utf8");	

		schema.forEach(function(item) {			
			fs.writeFileSync(path.join(folder, item.name + ".js"), ejs.render(template, item), "utf8");
		});

		callback(null);
	} catch (err) {
		callback(err);
	}
	
}