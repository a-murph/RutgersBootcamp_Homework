var connection = require("./connection.js");

var orm = {
	selectAll: function(table, column) {
		connection.query(
			"SELECT * FROM ??",
			[table],
			function(err, data) {
				if (err) throw err;

				for (var i = 0; i < data.length; i++) {
					console.log(data[i][column]);
				}
			}
		);
	},

	selectWhere: function(table, column, value) {
		connection.query(
			"SELECT * FROM ?? WHERE ?? = ?",
			[table, column, value],
			function(err, data) {
				if (err) throw err;

				console.log(data);
			}
		);
	},

	clientParties: function(table1Col, table2Key, table1, table2) {
		var query = connection.query(
			"SELECT ?? FROM ?? LEFT JOIN ?? ON ??.?? = ??.id",
			[table1Col, table1, table2, table2, table2Key, table1],
			function(err, data) {
				if (err) throw err;

				console.log(data);
			}
		);
		
		console.log(query.sql);
	},
};

module.exports = orm;