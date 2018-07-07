var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf-8", function(error, data) {
	if (error) {
		console.log(error);
	}
	console.log(data);
	var dataArr = data.split(",");
	console.log(dataArr);
	for (var i = 0; i < dataArr.length; i++) {
		dataArr[i] = dataArr[i].trim();
		console.log(dataArr[i]);
	}
});