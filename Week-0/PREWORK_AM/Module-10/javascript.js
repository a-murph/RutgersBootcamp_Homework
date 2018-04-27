document.getElementById("growBtn").addEventListener("click", function() {
	document.getElementById("box").style.height = "250px";
	document.getElementById("box").style.width = "250px";
});

document.getElementById("blueBtn").addEventListener("click", function() {
	document.getElementById("box").style.background = "blue";
});

document.getElementById("fadeBtn").addEventListener("click", function() {
	document.getElementById("box").style.opacity = "0.4";
});

document.getElementById("resetBtn").addEventListener("click", function() {
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.background = "orange";
	document.getElementById("box").style.opacity = "1.0";
});