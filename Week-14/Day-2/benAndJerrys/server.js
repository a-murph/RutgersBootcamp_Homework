var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var iceCreams = [
	{
		name: 'vanilla',
		price: 10,
		awesomeness: 3
	},
	{
		name: 'chocolate',
		price: 4,
		awesomeness: 8
	},
	{
		name: 'banana',
		price: 1,
		awesomeness: 1
	},
	{
		name: 'greentea',
		price: 5,
		awesomeness: 7
	},
	{
		name: 'jawbreakers',
		price: 6,
		awesomeness: 2
	},
];

app.get("/icecream/:name", function(req, res) {
	var paramName = req.params.name;

	var flavor = iceCreams.find(function(iceCream) {
		return iceCream.name === paramName;
	});	

	res.render("single-cream", {
		name: flavor.name,
		price: flavor.price,
		awesomeness: flavor.awesomeness
	});
});

app.get("/icecreams", function(req, res) {
	res.render("all-creams", {
		iceCreams: iceCreams
	});
});

app.listen(PORT, function() {
	console.log("listening on port: " +PORT);
})