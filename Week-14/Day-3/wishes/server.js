var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var exphb = require("express-handlebars");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "wishes_db",
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

connection.connect(function(err) {
	if (err) {
		console.log("error: " +err.stack);
		return;
	}
});

app.get("/", function(req, res) {
	connection.query(
		"SELECT * FROM wishes",
		function(error, data) {
			if (error) throw error;

			res.render("wishes", { wishes: data });
		}	
	);
});

app.post("/", function(req, res) {	
	connection.query(
		"INSERT INTO wishes (wish) VALUES (?)",
		[
			req.body.newWish
		],
		function(error, data) {
			if (error) throw error;

			res.redirect("/");
		}	
	);
});

app.listen(PORT, function() {
	console.log("listening on port: " +PORT);
});