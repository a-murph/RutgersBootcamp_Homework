var fs = require("fs");
var file = "bank.txt";
var command = process.argv[2];
var amount = process.argv[3];

switch (command) {
	case "deposit":
		fs.appendFile(file, ", " +amount, function(error, data) {
			if (error) {
				console.log(error);
			}

			console.log("Deposited $" +amount);
			displayTotal();
		});
		break;
	case "withdraw":
		fs.appendFile(file, ", -" +amount, function(error, data) {
			if (error) {
				console.log(error);
			}

			console.log("Withdrew $" +amount);
			displayTotal();
		});
		break;
	case "total":
		displayTotal();
		break;
	case "lotto":
		fs.appendFile(file, ", -2", function(error, data) {
			if (error) {
				console.log(error);
			}

			var lottoNum = Math.random();
			if (lottoNum <= 0.08) {
				fs.appendFile(file, ", 22", function(error, data) {
					console.log("Congratulations! You won the lottery!");
					displayTotal();
				});
			} else {
				console.log("Sorry, you didn't win.");
				displayTotal();
			}
		});
		break;
}

function displayTotal() {
	fs.readFile(file, "utf-8", function(error, data) {
		if (error) {
			console.log(error);
		}

		var transactions = data.split(",");
		var total = 0;
		for (var i = 0; i < transactions.length; i++) {
			transactions[i] = parseFloat(transactions[i].trim());
			total += transactions[i];
		}
		console.log("Balance: " +total.toFixed(2));
	});
}