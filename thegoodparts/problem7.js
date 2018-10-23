/**
Write a function curry that takes a binary function and an argument, and returns a function that can take a second argument.
  var add3 = curry(add, 3);
  curry(add, 3)(4);     //7
  curry(mul, 5)(6)     //30
 **/

function curry(binaryfn, a) {
  return function(b) {
    return binaryfn(a,b);
  }
}


function add(a,b){return a+b}
function sub(a,b){return a-b}
function mul(a,b){return a*b}
function div(a,b){return a/b}


console.log(curry(add, 5)(4));
console.log(curry(sub, 5)(4));
console.log(curry(mul, 5)(4));
console.log(curry(div, 5)(4));
