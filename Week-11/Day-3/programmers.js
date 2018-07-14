var Programmer = function(name, job, age, language) {
	this.name = name;
	this.job = job;
	this.age = age;
	this.language = language;
	this.printContents = function() {
		console.log("Name: " +this.name);
		console.log("Job: " +this.job);
		console.log("Age: " +this.age);
		console.log("Preferred Language: " +this.language);
	};
}

var notch = new Programmer("Notch", "Indie Game Developer", 38, "Java");
notch.printContents();