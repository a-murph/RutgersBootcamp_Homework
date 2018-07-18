var request = require("request");
var fs = require("fs");

var TV = function () {
	this.findShow = function (show) {
		// The following URL can be used to search the TV Maze API for a given show
		var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

		request(URL, function(error, response, body) {
			if (error)
				throw error;

			var result = JSON.parse(body);

			//empty string to hold formatted info pulled from result object
			var formatted = "";

			formatted += "Show: " +result.name +"\n";
			formatted += "Genres: " +result.genres.join(", ") +"\n";
			formatted += "Rating: " +result.rating.average +"\n";
			if (result.network)
				formatted += "Network: " +result.network.name +"\n";
			formatted += "Summary: " +result.summary +"\n";

			fs.appendFile("log.txt", formatted, function(error){if (error) throw error;});

			console.log(formatted);
		});
	};

	this.findActor = function (actorName) {
		var URL = "http://api.tvmaze.com/search/people?q=" + actorName;

		request(URL, function(error, response, body) {
			if (error)
				throw error;

			var actor = JSON.parse(body)[0].person;

			//empty string to hold formatted info pulled from actor object
			var formatted = "";

			formatted += "Actor: " +actor.name +"\n";
			formatted += "Birthday: " +actor.birthday +"\n";
			formatted += "Gender: " +actor.gender +"\n";
			formatted += "Country: " +actor.country.name +"\n";
			formatted += "TVMaze URL: " +actor.url +"\n";

			fs.appendFile("log.txt", formatted, function(error){if (error) throw error;});

			console.log(formatted);
		});
	};
};

module.exports = TV;