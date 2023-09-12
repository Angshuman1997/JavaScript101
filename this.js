// In JavaScript, the "this" keyword is a reference to the current execution context, 
// which can vary depending on how and where it is used. It is often used within functions 
// and methods to refer to the object that called the function or the object that the function
//  is a method of. The value of "this" is determined dynamically at runtime.

// Example 1: "this" in a Global Context
console.log(this); 
// In the global context, "this" refers to the global object (e.g., window in a browser or 
// global in Node.js).

// Example 2: "this" in a Function
function sayHello() {
  console.log("Hello, " + this.name);
}

const person = {
  name: "John",
  greet: sayHello,
};

person.greet(); // When calling the method greet on the person object, "this" refers to the person object.

// Example 3: "this" in an Event Handler
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked by: " + this.id); 
  // Inside an event handler, "this" refers to the element that triggered the event.
});

// Example 4: "this" in Constructors
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.drive = function () {
    console.log("Driving a " + this.make + " " + this.model);
  };
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // In a constructor, "this" refers to the newly created instance.

// Example 5: "this" in Arrow Functions
const arrowFunction = () => {
  console.log("Arrow function's this: " + this);
};

arrowFunction(); 
// In an arrow function, "this" retains the value of the surrounding lexical context 
// (usually the outer function or the global context).
