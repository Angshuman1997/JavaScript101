// In JavaScript, every object is linked to a prototype object, which serves 
// as a template for the properties and methods an object should have. You can 
// create object prototypes using constructor functions or class syntax.

// Creating an Object Prototype using Constructor Function:

// Define a constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a method to the prototype
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// Create instances of the Person prototype
const person1 = new Person("John", "Doe");
const person2 = new Person("Alice", "Smith");

console.log(person1.getFullName()); // Output: "John Doe"
console.log(person2.getFullName()); // Output: "Alice Smith"

// Creating an Object Prototype using Class Syntax (ES6):

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Add a method to the prototype
  makeSound(sound) {
    console.log(`${this.name} the ${this.species} makes a ${sound} sound.`);
  }
}

// Create instances of the Animal class
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

dog.makeSound("bark"); // Output: "Buddy the Dog makes a bark sound."
cat.makeSound("meow"); // Output: "Whiskers the Cat makes a meow sound."
