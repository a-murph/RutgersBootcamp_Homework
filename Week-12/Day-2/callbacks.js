var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function logCB(message, cb) {
	console.log(message);
	cb();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function ifCB(condition, cb) {
	if (condition)
		cb();
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function returnFV(value, cb) {
	return function() {
		return cb(value);
	}
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
function logMessage(message) {
	fs.writeFile("log.txt", message, function(error) {if (error) throw error});
	//the third argument of fs.writeFile is a callback function. It recieves one argument, called error, that holds whatever error (if any) prevents writeFile from executing. In the body of the function, it throws the error if there is one.
}