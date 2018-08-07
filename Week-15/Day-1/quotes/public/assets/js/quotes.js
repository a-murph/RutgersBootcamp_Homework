// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(document).on(".delquote", "click", function(event) {
		$.ajax("/")
	});
});
