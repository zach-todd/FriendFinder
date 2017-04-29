var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');

var app = express();

var port = 8080;

	connection.connest(function(err){
		if(err){
			console.error("error connecting: " + err.stack);
		}
		console.log("connected as id " + connection.threadId);
	});

	app.use( bodyParser.urlencoded( {
	extended: true
	} ) );

	
	app.get( '/', function ( req, res ) {
		res.sendFile( path.join( __dirname + '/index.html' ) );
	});


	app.get("/survey", function(req,res){
		res.sendFile( path.join( __dirname + '/survey.html' ) );
	});


	app.get("/api/friends", function(req,res){
		var Friends = {
			
		}
		
	});
