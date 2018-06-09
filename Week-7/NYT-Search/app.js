$(document).ready(function() {
	$("body").on("click", "#submit-button", function() {
		var keyword = $("#keyword").val();
		var articleNumber = $("#article-number").val();
		var startYear = $("#start-year").val();
		var endYear = $("#end-year").val();
	
		console.log(keyword);
		console.log(articleNumber);
		console.log(startYear);
		console.log(endYear);
	});
});