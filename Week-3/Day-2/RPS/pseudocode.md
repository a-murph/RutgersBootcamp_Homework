div for number of user wins
div for number of ties
div for number of computer wins

var userGuess
var compGuess
var choiceArr = [r, p, s]

listen for user keyup of r, p, or s
generate random number between 0 and 2 and set compGuess to choiceArr[randomNumber]

if userGuess === compGuess
	game is tied

else if userGuess === r && compGuess === p
	computer wins

else if userGuess === r %% compGuess === s
	user wins

etc.

increment user or computer wins

-------------------

var results = [[r, p, comp], [r, s, user], etc.] is this viable???