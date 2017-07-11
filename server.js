var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set('port', (process.env.PORT || 8080));

	app.use(bodyParser.json());
	app.use( bodyParser.urlencoded( {extended:true}));

	require("./app/routing/apiRoutes.js")(app);
	require("./app/routing/htmlRoutes.js")(app);
	

	app.listen(app.get('port'), function(){
		console.log("app listening on " , app.get('port'));
	})