// Strict mode is a feature in JavaScript that allows you to place your 
// program or a specific function into a stricter operating context. 
// It was introduced in ECMAScript 5 (ES5) to help developers write more 
// reliable and maintainable code by catching common coding mistakes and 
// preventing the use of certain error-prone features. When you enable strict 
// mode, the JavaScript interpreter enforces stricter parsing and error handling rules.

"use strict";

function myFunction() {
  nonDeclaredVar = 42; // Error: nonDeclaredVar is not defined
}

myFunction();

// In this example, without strict mode, the assignment to nonDeclaredVar would 
// create a global variable. With strict mode enabled, it becomes an error, which 
// helps catch potential issues.
