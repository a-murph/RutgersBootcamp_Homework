var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "top_songsDB"
});

inquirer.prompt([
	{
		name: "operation",
		message: "What kind of search would you like to perform?",
		type: "list",
		choices: ["Artist", "Song", "Range", "Multiple Listings"]
	}
]).then(function(answers) {
	switch (answers.operation) {

		//ARTIST SEARCH
		case "Artist":
			inquirer.prompt([
				{
					name: "artist",
					message: "What artist would you like to search for?"
				}
			]).then(function(answers) {
				var query = connection.query(
					"SELECT * FROM top5000 WHERE ?",
					{
						artist: answers.artist
					},
					function(err, res) {
						if (err) throw err;
						if (res.length == 0) {
							console.log("No songs found by specified artist.");
						} else {
							for (var i = 0; i < res.length; i++) {
								console.log("Rank: #" +res[i].id +"   Song: " +res[i].song);
							}
							console.log("Total number of songs by " +res[0].artist +": " +res.length);
						}
						connection.end();
					}
				);
			});
			break;

		//SONG SEARCH
		case "Song":
			inquirer.prompt([
				{
					name: "song",
					message: "What song would you like to search for?"
				}
			]).then(function(answers) {
				var query = connection.query(
					"SELECT * FROM top5000 WHERE ?",
					{
						song: answers.song
					},
					function(err, res) {
						if (err) throw err;
						if (res.length == 0) {
							console.log("Song not found.");
						} else {
							console.log("Song name: " +res[0].song);
							console.log("Artist: " +res[0].artist);
							console.log("Rank: #" +res[0].id);
							console.log("Total Score: " +res[0].total_score);
							console.log("US Score: " +res[0].us_score);
							console.log("UK Score: " +res[0].uk_score);
							console.log("Europe Score: " +res[0].eu_score);
							console.log("Other Score: " +res[0].ms_score);
						}
						connection.end();
					}
				)
			});
			break;

		//RANGE SEARCH
		case "Range":
			inquirer.prompt([
				{
					name: "start",
					message: "Which rank would you like to start at? (1-5000)"
				},
				{
					name: "end",
					message: "Which rank would you like to end at? (1-5000)"
				}
			]).then(function(answers) {
				var query = connection.query(
					"SELECT * FROM top5000 WHERE id >= " +answers.start +" AND id <= " +answers.end,
					function(err, res) {
						if (err) throw err;
						if (res.length == 0) {
							console.log("0 range specified");
						} else {
							for (var i = 0; i < res.length; i++) {
								console.log("Rank: #" +res[i].id +" " +res[i].song +" - " +res[i].artist);
							}
						}
						connection.end();
					}
				)
			});
			break;
		
		//DUPLICATE SEARCH
		case "Multiple Listings":
			var query = connection.query(
				"SELECT artist, COUNT(artist) FROM top5000 GROUP BY artist HAVING COUNT(artist) > 2",
				function(err, res) {
					if (err) throw err;
					console.log("All artists with more than 1 listed song:");
					for (var i = 0; i < res.length; i++) {
						console.log(res[i].artist);
					}
					connection.end();
				}
			);
			break;
	}
});