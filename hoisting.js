var y = 3;
console.log(y); // Output - 3

// As in the intital stage undefined value is set as default in the memory allocation
console.log(x); // Output - undefined // As the console log is called before the new value allocation undefined is printed.
var x = 4;

// A new execution context is created whenever a new scope is formed. As in the intital stage undefined value is set as default in the memory allocation
function fun1() {
  console.log(z); // Output - undefined // As the console log is called before the new value allocation undefined is printed.
  var z = 5;
}

function fun2() {
  var w = 6;
  console.log(w); // Output - 6
}

fun1();
fun2();