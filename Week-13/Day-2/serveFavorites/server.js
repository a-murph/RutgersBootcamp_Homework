var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(request, response) {
	var path = request.url;

	switch (path) {
		case "/":
			displayPage(path, request, response, "index");
			break;

		case "/anime":
			displayPage(path, request, response, "anime");
			break;
		
		case "/games":
			displayPage(path, request, response, "games");
			break;
		
		case "/albums":
			displayPage(path, request, response, "albums");
			break;

		default:
			displayPage(path, request, response, "404");
	}
}

function displayPage(path, request, response, pageName) {
	fs.readFile(__dirname +"/" +pageName +".html", function(err, data) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(data);
	});
}

server.listen(PORT, function() {
	console.log("Server is listening on PORT: " + PORT);
});