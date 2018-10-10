/* Write a function identifyf that takes an argument and returns a function that returns that argument */

function identifyf(a) {
	return function() {
		return a;
	}
}

console.log(identifyf(5)());




