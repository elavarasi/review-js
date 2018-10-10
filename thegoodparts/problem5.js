/* Write a function addf that adds from two invocations: addf(3)(4)  to give 7*/
function addf(a) {
	return function(b) {
		return a + b;
	}
}

console.log(addf(3)(4));

