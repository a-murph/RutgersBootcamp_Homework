function Character(name, race, job, gender, age, strength, hp) {
	this.name = name;
	this.race = race;
	this.job = job;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
	this.printStats = function() {
		console.log("Name: " +this.name);
		console.log("Race: " +this.race);
		console.log("Job: " +this.job);
		console.log("Gender: " +this.gender);
		console.log("Age: " +this.age);
		console.log("Strength: " +this.strength);
		console.log("HP: " +this.hp);
		console.log("");
	};
	this.isAlive = function() {
		if (this.hp > 0)
			console.log(this.name +" is alive.\n");
		else
			console.log(this.name +" is KO'd.\n");
	};
	this.attack = function(target) {
		console.log(this.name +" attacks " +target.name +" for " +this.strength +" damage.\n");
		target.hp = target.hp - this.strength;
	};
	this.levelUp = function() {
		console.log(this.name +" levels up!\n+1 Strength\n+5 HP\n");
		this.age += 1;
		this.strength += 1;
		this.hp += 5;
	};
}

var kite = new Character("Kite on the Wind", "Tabaxi", "Pirate", "Female", 23, 1, 12);
var thaldrus = new Character("Thaldrus Hjalmyr", "Mountain Dwarf", "Blacksmith", "Male", 86, 2, 10);

kite.printStats();
thaldrus.printStats();

kite.isAlive();
thaldrus.isAlive();

kite.attack(thaldrus);
thaldrus.attack(kite);

kite.printStats();
thaldrus.printStats();

kite.levelUp();
thaldrus.levelUp();

kite.printStats();
thaldrus.printStats();