var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "playlistDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected as: " +connection.threadId +"\n");
	getAllSongs();
	getGenreSongs("dance");
	getGenreSongs("classic rock");
	addSongs();
});

function getAllSongs() {
	connection.query("SELECT * FROM songs", function(err, data) {
		if (err) throw err;
		console.log("Selecting All Songs: ");
		console.log(data);
		console.log("");
	});
}

function getGenreSongs(genre) {
	connection.query("SELECT * FROM songs WHERE genre = '" +genre +"'", function(err, data) {
		if (err) throw err;
		console.log("Selecting " +genre +" Songs: ");
		console.log(data);
		console.log("");
	});
}

function addSongs() {
	var query = connection.query(
		"INSERT INTO songs SET ?",
		{
			title: "Day of the Baphomets",
			artist: "The Mars Volta",
			genre: "Prog Rock"
		},
		function(err, data) {
			if (err) throw err;
			console.log(data.affectedRows +" Insertion Completed");
			updateSongs();
		}
	);

	console.log(query.sql);
}

function updateSongs() {
	var query = connection.query(
		"UPDATE songs SET ? WHERE ?",
		[
			{
				genre: "Progressive Rock"
			},
			{
				title: "Day of the Baphomets"
			}
		],
		function(err, data) {
			if (err) throw err;
			console.log(data.affectedRows +" Update Completed");
			deleteSongs();
		}
	);

	console.log(query.sql);
}

function deleteSongs() {
	var query = connection.query(
		"DELETE FROM songs WHERE ?",
		{
			title: "Human"
		},
		function(err, data) {
			if (err) throw err;
			console.log(data.affectedRows +" Deletion Completed");
			getAllSongs();
			connection.end();
		}
	);

	console.log(query.sql);
}