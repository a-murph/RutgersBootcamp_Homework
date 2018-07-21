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
	connection.end();
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