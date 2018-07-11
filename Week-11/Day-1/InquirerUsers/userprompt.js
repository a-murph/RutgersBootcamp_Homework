// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is your name?",
			name: "username"
		},
		{
			type: "list",
			message: "Which is your favorite Pokemon region?",
			choices: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola"],
			name: "region"
		},
		{
			type: "checkbox",
			message: "Which Pokemon games have you played?",
			choices: ["R/B/G/Y", "G/S/C", "R/S/E/FR/LG", "D/P/Pt/HG/SS", "B/W/B2/W2", "X/Y/OR/AS", "S/M/US/UM"],
			name: "games"
		},
		{
			type: "confirm",
			message: "Are you sure all of the information you have entered is correct?",
			name: "confirm",
			default: true
		},
		{
			type: "password",
			message: "Password?",
			name: "password"
		}
	]).then(function(inquirerResponse) {
		if (inquirerResponse.confirm) {
			if (inquirerResponse.password == "correctPassword") {
				console.log("\nHello, " +inquirerResponse.username);
				console.log("Your favorite region is " +inquirerResponse.region);
				console.log("You have played games from " +inquirerResponse.games.length +" generations");
			} else {
				console.log("Sorry, wrong password.");
			}
		} else {
			console.log("\nThat's okay " +inquirerResponse.username +", come again later.");
		}
	});