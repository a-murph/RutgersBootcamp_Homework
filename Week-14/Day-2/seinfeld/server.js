var mysql = require("mysql");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3500;

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "seinfeld_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("error: " +err.stack);
		return;
	}

	console.log("connected as id: " +connection.threadId);
});

app.get("/cast", function(req, res) {
	connection.query("SELECT * FROM actors", function(error, data) {
		if (error) throw error;

		var html = "<h1>Actors by ID</h1><ul>";

		for (var i = 0; i < data.length; i++) {
			html += "<li><p>ID: " +data[i].id +"</p>"
			html += "<p>Name: " +data[i].name +"</li>";
		}

		html += "</ul>";
		
		res.send(html);
	});
});

app.get("/coolness-chart", function(req, res) {
	connection.query(
		"SELECT * FROM actors ORDER BY coolness_points",
		function(error, data) {
			if (error) throw error;

			var html = "<h1>Actors by Coolness</h1><ul>";

			for (var i = 0; i < data.length; i++) {
				html += "<li><p>Name: " +data[i].name +"</p>"
				html += "<p>Coolness: " +data[i].coolness_points +"</li>";
			}

			html += "</ul>";
			
			res.send(html);
		}
	);
});

app.get("/attitude-chart/:att", function(req, res) {
	connection.query(
		"SELECT * FROM actors WHERE ?",
		{
			attitude: req.params.att
		},
		function(error, data) {
			if (error) throw error;

			var html = "<h1>" +req.params.att +" Actors</h1><ul>";

			for (var i = 0; i < data.length; i++) {
				html += "<li><p>Name: " +data[i].name +"</p>"
				html += "<p>Attitude: " +data[i].attitude +"</li>";
			}

			html += "</ul>";
			
			res.send(html);
		}
	)
});

app.listen(PORT, function() {
	console.log("listening on port: " +PORT);
});