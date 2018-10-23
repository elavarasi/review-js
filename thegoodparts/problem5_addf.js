/* Write a function addf that adds from two invocations: addf(3)(4)  to give 7*/
module.exports = self = {
	addf: function addf(a) {
		return function (b) {
			return a + b;
		}
	}
}

console.log(self.addf(3)(4));

