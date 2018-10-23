function foo() {
  function bar(a) {
    var i = 3;
    //console.log(a, i);
  }

  for(var i = 0; i<10; i++) {
    console.log(i);
    bar(i);
    console.log(i)
  }

}

foo();