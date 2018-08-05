var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var exphb = require("express-handlebars");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "moviePlanner_db",
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

connection.connect(function(err) {
	if (err) {
		console.log(err.stack);
		return;
	}

	console.log("Connected as id: " +connection.threadId);
});

app.get("/", function(req, res) {
	connection.query(
		"SELECT * FROM movies",
		function(error, data) {
			if (error) throw error;

			res.render("index", { movies: data });
		}
	);
});

app.post("/movies", function(req, res) {
	connection.query(
		"INSERT INTO movies (movie) VALUES (?)",
		{
			movie: req.body.newMovie
		},
		function(err, data) {
			res.redirect("/");
		}
	);
});

app.put("/movies", function(req, res) {

});

app.delete("/movies", function(req, res) {

});

app.listen(PORT, function() {
	console.log("listening on port: " +PORT);
});