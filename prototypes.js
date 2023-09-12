// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
}

// Creating objects
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Calling the method
person1.greet(); // Output: Hello, my name is Alice, and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob, and I am 25 years old.
