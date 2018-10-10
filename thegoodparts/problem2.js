// What is x?
function swap(a,b) {
	const temp = a;
	a = b;
	b = temp;
}
var x = 1, y = 2;
swap(x,y);

console.log(x); //still 1 
