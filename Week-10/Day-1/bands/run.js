var external = require("./bands.js");

if (process.argv.length > 2) {
	if (process.argv[2] === "punk") {
		console.log("A punk band is " +external.bands.punk);
	}
	else if (process.argv[2] === "rap") {
		console.log("A rap group is " +external.bands.rap);
	}
	else if (process.argv[2] === "classic") {
		console.log("A classic rock band is " +external.bands.classic);
	}
} else {
	console.log("A punk band is " +external.bands.punk);
	console.log("A rap group is " +external.bands.rap);
	console.log("A classic rock band is " +external.bands.classic);
}