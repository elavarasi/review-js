// Write a liftf function that takes a binary function and makes it callable with two invocations:
/**
 * var addf = liftf(add);
 * addf(3)(4);   //7
 * liftf(mul)(5)(6)   //30
 */


function liftf(fn) {
  return function (a) {
    return function (b) {
      return fn(a,b);
    }
  }
}


function add(a,b) {
  return a + b;
}

function sub(a,b) {
  return a-b;
}

function mul(a,b) {
  return a * b;
}

function div(a,b) {
  return a / b;
}


console.log(liftf(add)(4)(3));
console.log(liftf(sub)(4)(3));
console.log(liftf(mul)(4)(3));
console.log(liftf(div)(4)(3));