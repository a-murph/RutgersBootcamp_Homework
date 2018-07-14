var inquirer = require("inquirer");

var Player = function(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = function() {
		randNum = Math.random();
		if (randNum < 0.5) {
			this.offense++;
		}
		else {
			this.defense++;
		}
	};
	this.badGame = function() {
		randNum = Math.random();
		if (randNum < 0.5) {
			this.offense--;
		}
		else {
			this.defense--;
		}
	};
	this.printStats = function() {
		console.log("Name:" +this.name);
		console.log("Position:" +this.position);
		console.log("Offense:" +this.offense);
		console.log("Defense:" +this.defense);
		console.log();
	};
}

var count = 0;
var starters = [];
var subs = [];
var score = 0;

var createNewPlayers = function() {
	if (count < 2) {
		console.log("NEW STARTER:");
		inquirer.prompt([
			{
				name: "name",
				message: "Player name?"
			},
			{
				name: "position",
				message: "Position?"
			},
			{
				name: "offense",
				message: "Offense value?"
			},
			{
				name: "defense",
				message: "Defense value?"
			}
		]).then(function(answers) {
			var newPlayer = new Player(
				answers.name,
				answers.position,
				answers.offense,
				answers.defense
			);
			starters.push(newPlayer);
			count++;
			createNewPlayers();
		});
	} else if (count == 2) {
		console.log("NEW SUB:");
		inquirer.prompt([
			{
				name: "name",
				message: "Player name?"
			},
			{
				name: "position",
				message: "Position?"
			},
			{
				name: "offense",
				message: "Offense value?"
			},
			{
				name: "defense",
				message: "Defense value?"
			}
		]).then(function(answers) {
			var newPlayer = new Player(
				answers.name,
				answers.position,
				parseInt(answers.offense),
				parseInt(answers.defense)
			);
			subs.push(newPlayer);
			count++;
			createNewPlayers();
		});
	} else {
		for (var i = 0; i < starters.length; i++) {
			starters[i].printStats();
		}
		for (var i = 0; i < subs.length; i++) {
			subs[i].printStats();
		}
		count = 0;
		playGame();
	}
};

var playGame = function() {
	if (count < 5) {
		var randOffense = Math.ceil(Math.random() * 20);
		var randDefense = Math.ceil(Math.random() * 20);

		console.log(randDefense);
		console.log(randOffense);

		if (randOffense < starters[0].offense + starters[1].offense) {
			score++;
			console.log("Gained 1 point.");
		}
		if (randDefense > starters[0].defense + starters[1].defense) {
			score--;
			console.log("Lost 1 point.");
		}

		console.log("Current score: " +score);

		inquirer.prompt([
			{
				name: "confirm",
				type: "confirm",
				message: "Would you like to swap out a player?"
			}
		]).then(function(answers) {
			console.log("~~in confirm then");
			if (answers.confirm) {
				inquirer.prompt([
					{
						name: "swapIn",
						type: "list",
						message: "Which player would you like to swap in?",
						choices: [subs[0]]
					},
					{
						name: "swapOut",
						type: "list",
						message: "Which player would you like to swap out?",
						choices: [starters[0], starters[1]]
					}
				]).then(function(answers) {
					var swapOutLoc = starters.indexOf(answers.swapOut);
					var swapInLoc = subs.indexOf(answers.swapIn);

					starters[swapOutLoc] = answers.swapIn;
					subs[swapInLoc] = answers.swapOut;

					count++;
					playGame();
				});
			} else {
				count++;
				playGame();
			}
		});		
	} else {
		if (score > 0) {
			for (var i = 0; i < starters.length; i++) {
				starters[i].goodGame();
			}
			console.log("You won! Your ending team gets a stat boost.");
		} else if (score < 0) {
			for (var i = 0; i < starters.length; i++) {
				starters[i].badGame();
			}
			console.log("You lost! Your ending team suffers a stat penalty.");
		}
		inquirer.prompt([
			{
				name: "again",
				type: "confirm",
				message: "Would you like to play again?"
			}
		]).then(function(answers) {
			if (answers.confirm) {
				count = 0;
				playGame();
			}
		});
	}
}

createNewPlayers();