var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3300;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
	if (reservations.length < 5) {
		reservations.push(req.body);
		res.send(true);
	} else {
		waitlist.push(req.body);
		res.send(false);
	}
});

app.post("/api/clear", function(req, res) {
	reservations = [];
	waitlist = [];
});

app.listen(PORT, function() {
	console.log("Listening on port: " +PORT);
});