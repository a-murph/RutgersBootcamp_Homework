function Pet() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;

	this.feed = function() {
		if (this.hungry) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else
			console.log("No thanks, I'm full.");
	}

	this.sleep = function() {
		if (this.sleepy) {
			console.log("Zzzzzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else
			console.log("No way! I'm not tired.");
	}

	this.play = function() {
		if (this.bored) {
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else
			console.log("Not right now, maybe later?");
	}

	this.increaseAge = function() {
		this.age += 1;
		console.log("Happy birthday to me! I am " +this.age +" years old!");
	}
}

var dog = new Pet();
dog.outside = false;
dog.bark = function() { console.log("Woof! Woof!"); };
dog.goOutside = function() {
	if (!this.outside) {
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	} else
		console.log("We're already outside...");
};
dog.goInside = function() {
	if (this.outside) {
		console.log("Do we have to? Okay...");
		this.outside = false;
	} else
		console.log("I'm already inside...");
}

var cat = new Pet();
cat.houseCondition = 100;
cat.meow = function() { console.log("Meow! Meow!") };
cat.destroyFurniture = function() {
	if (this.houseCondition > 0) {
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
		this.houseCondition -= 10;
		this.bored = false;
		this.sleepy = true;
	}
}
cat.buyNewFurniture = function() {
	this.houseCondition += 50;
	console.log("Are you sure about that? It's just going to get destroyed again.");
}

var petName = process.argv[2];
var action = process.argv[3];
var pet;
if (petName.toLowerCase() == "dog")
	pet = dog;
else if (petName.toLowerCase() == "cat")
	pet = cat;

if (!pet)
	console.log("Pet not found.");
else {
	if (action == "feed")
		pet.feed();
	else if (action == "sleep")
		pet.sleep();
	else if (action == "play")
		pet.play();
	else if (pet == dog) {
		if (action == "outside")
			pet.goOutside();
		else if (action == "inside")
			pet.goInside();
	} else if (pet == cat) {
		if (action == "destroy")
			pet.destroyFurniture();
		else if (action == "replace")
			pet.buyNewFurniture();
	}
}