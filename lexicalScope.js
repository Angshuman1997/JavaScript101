// Lexical scoping, or static scoping, means variables are defined based on 
// their position in the source code, not where they are executed. Variables are
//  accessible in their block and nested blocks, but not vice versa.

function outer() {
  const outerVar = "I'm from outer";
  function inner() {
    const innerVar = "I'm from inner";
    console.log(outerVar); // Accessible due to lexical scoping
  }
  inner();
  // console.log(innerVar); // Error: innerVar is not defined
}

outer();
