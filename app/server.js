var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = 8080;

	app.use(bodyParser.json());
	app.use( bodyParser.urlencoded( {
	extended: true
	} ) );
	require("./routing/apiRoutes.js")(app);
	require("./routing/htmlRoutes.js")(app);
	

	app.listen(PORT, function(){
		console.log("app listening on " + PORT);
	})