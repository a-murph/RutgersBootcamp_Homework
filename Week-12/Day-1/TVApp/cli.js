var TV = require("./tv.js");

var tv = new TV;

//actor or show
var searchType = "";
//if argument was given, use it, otherwise leave as an empty string
if (process.argv[2]) {
	searchType = process.argv[2];
}

var searchQuery = ""
//if argument was given, use it, otherwise leave as an empty string
if (process.argv[3]) {
	//takes all elements in process.argv starting from [3] and joins them into a string, separated by spaces
	searchQuery = process.argv.slice(3).join(" ");
}

if (searchType.toLowerCase() == "show" && searchQuery) {
	searchShow();
} else if (searchType.toLowerCase() == "actor" && searchQuery) {
	searchActor();
} else {
	//if searchType is empty or invalid, set to default and run
	searchType = "show"
	searchQuery = "Bojack Horseman"
	console.log("Invalid parameters given. Using default parameters.");
	searchShow();
}

//search for TV show by title
function searchShow() {
	console.log("Searching for show: " +searchQuery);
	tv.findShow(searchQuery);
}

//search for actor by name
function searchActor() {
	console.log("Searching for actor: " +searchQuery);
}