var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "LengthmattersmorethanGirth",
	database: "ice_creamDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected as: " +connection.threadId);
	connection.end();
});