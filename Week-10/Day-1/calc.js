var operation = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);
var answer = "";

if (operation === "add")
	answer = num1 + num2;
else if (operation === "subtract")
	answer = num1 - num2;
else if (operation === "multiply")
	answer = num1 * num2;
else if (operation === "divide")
	answer = num1 / num2;
else if (operation === "remainder")
	answer = num1 % num2;
else if (operation === "exp")
	answer = Math.pow(num1, num2);

console.log(answer);