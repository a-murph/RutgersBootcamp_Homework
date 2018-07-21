var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "greatbay_db"
});

inquirer.prompt([
	{
		name: "action",
		message: "Would you like to post a new item, or bid on an existing item?",
		type: "list",
		choices: ["POST", "BID"]
	}
]).then(function(response) {
	if (response.action == "POST")
		postItem();
	else if (response.action == "BID")
		bidOnItem();
	else
		console.log("Invalid Response");
});

function postItem() {
	connection.connect(function(error) {
		if (error) throw error;
	});
}

function bidOnItem() {
	connection.connect(function(error) {
		if (error) throw error;
	});
}