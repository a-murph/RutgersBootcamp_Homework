var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
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
		inquirer.prompt([
			{
				name: "itemName",
				message: "What is the name of the item you are posting?",
			},
			{
				name: "itemType",
				message: "What type of thing is it?",
				type: "list",
				choices: ["Item", "Task", "Job", "Project"]
			},
			{
				name: "startingPrice",
				message: "What is the starting price?"
			}
		]).then(function(response) {
			var query = connection.query(
				"INSERT INTO items SET ?",
				{
					name: response.itemName,
					type: response.itemType,
					startingPrice: response.startingPrice,
					highestBid: response.startingPrice
				},
				function(err, res) {
					console.log(res.affectedRows +" item inserted\n");
					connection.end();
				}
			);
		});
	});
}

function bidOnItem() {
	connection.connect(function(error) {
		if (error) throw error;
		var items = [];
		var query = connection.query(
			"SELECT * FROM items",
			function(err, res) {
				for (var i = 0; i < res.length; i++) {
					items.push(res[i].name);
				}
				inquirer.prompt([
					{
						name: "item",
						message: "What would you like to bid on?",
						type: "list",
						choices: items
					},
					{
						name: "price",
						message: "How much would you like to bid?"
					}
				]).then(function(answers) {
					var highBid = 0;
					var query = connection.query(
						"SELECT * FROM items WHERE ?",
						{
							name: answers.item
						},
						function(err, res) {
							highBid = res[0].highestBid;
							if (answers.price > highBid) {
								var query = connection.query(
									"UPDATE items SET ? WHERE ?",
									[
										{
											highestBid: answers.price
										},
										{
											name: answers.item
										}
									],
									function(err, res) {
										console.log(res.affectedRows + " products updated!\n");
										connection.end();
									}
								)
							} else {
								console.log("Sorry, that bid isn't high enough.");
							}
						}
					)
				});
			}
		)
	});
}