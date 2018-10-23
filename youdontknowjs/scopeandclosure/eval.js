function foo(str, a) {
  eval(str);
  console.log(a);
  console.log(b); // 3 as the eval made the b shadow the global b
  console.log(a + b);
}
var b = 2;
foo("var b = 3", 5);