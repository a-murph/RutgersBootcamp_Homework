var unsorted = [];
var sorted = "";

for (var i = 2; i < process.argv.length; i++) {
	unsorted.push(process.argv[i]);
}

function sortNumber(a,b) {
    return a - b;
}

unsorted.sort(sortNumber);

for (var i = 0; i < unsorted.length; i++) {
	sorted += unsorted[i] +" ";
}

console.log(sorted);