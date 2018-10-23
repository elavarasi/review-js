/*
  Without writing any new functions, show three ways to create the inc function
  var inc = __;
  inc(5);      //6
  inc(inc(5)); //7

 */

function addf(a) {
  return function (b) {
    return a + b;
  }
}

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

function curry(binaryfn, a) {
  return function(b) {
    return binaryfn(a,b);
  }
}



//way 1
var inc = addf(1);
console.log(inc(5));

//way2
var inc = liftf(add)(1);
console.log(inc(5));

//way3
var inc = curry(add,1);
console.log(inc(5));
