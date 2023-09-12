// A constructor function is a blueprint for creating objects 
// with similar properties and methods.
// It's a way to define a reusable template for creating instances of objects.

// In this example:

// Person is the constructor function.
// name and age are properties defined for each instance.
// new Person(...) creates a new object based on the Person blueprint.

// The main idea is that you define a function to construct objects with specific 
// properties, and then you can create multiple instances of objects using that constructor function.

// Constructor function for creating 'Person' objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating instances using the constructor
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Accessing properties of instances
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 30
