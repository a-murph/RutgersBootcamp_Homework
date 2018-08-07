var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.ROOT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "LengthmattersmorethanGirth",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.
app.get("/", function(req, res) {
	connection.query(
		"SELECT * FROM quotes",
		function(err, data) {
			if (err) throw err;

			res.render("index", {
				quotes: data
			});
		}
	);
});

app.get("/:quoteId", function(req, res) {
	var quoteId = req.params.quoteId;

	connection.query(
		"SELECT * FROM quotes WHERE ?",
		{
			id: quoteId
		},
		function(err, data) {
			if (err) throw err;

			res.render("single-quote", data[0]);
		}
	)
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
