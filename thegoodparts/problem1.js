// What is x?

function funky(o){
	console.log(x);
	console.log(o);
	o = null;
	console.log(o);
}

var x = [];
funky(x);
console.log(x); //x will be [] as only reference is passed



