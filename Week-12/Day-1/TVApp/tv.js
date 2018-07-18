var request = require("request");
var fs = require("fs");

var TV = function () {
	this.findShow = function (show) {
		// The following URL can be used to search the TV Maze API for a given show
		var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

		request(URL, function(error, response, body) {
			var result = JSON.parse(body);
			var formatted = "";

			formatted += "Show: " +result.name +"\n";
			formatted += "Genres: " +result.genres.join(", ") +"\n";
			formatted += "Rating: " +result.rating.average +"\n";
			if (result.network)
				formatted += "Network: " +result.network.name +"\n";
			formatted += "Summary: " +result.summary +"\n";

			fs.appendFile("log.txt", formatted, function(error){if (error){throw error;}})

			console.log(formatted);
		});
	};
};

module.exports = TV;