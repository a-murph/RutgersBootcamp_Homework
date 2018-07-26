var http = require("http");

var PORT_POS = 7000;
var PORT_NEG = 7500;

function positiveMessage(request, response) {
	response.end("You're a great person");
}

function negativeMessage(request, response) {
	response.end("You're a bad person");
}

var serverPos = http.createServer(positiveMessage);
var serverNeg = http.createServer(negativeMessage);

serverPos.listen(PORT_POS, function() {
	console.log("Positive message server running on: http://localhost:" +PORT_POS);
});
serverNeg.listen(PORT_NEG, function() {
	console.log("Negative message server running on: http://localhost:" +PORT_NEG);
});