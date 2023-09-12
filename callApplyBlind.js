const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function (greeting) {
    console.log(greeting + ", " + this.firstName + " " + this.lastName);
  },
};

const anotherPerson = {
  firstName: "Alice",
  lastName: "Smith",
};

// The call() method allows you to invoke a function with a specific this value and arguments passed individually. It takes the context (this value) as its first argument, followed by the function arguments.
// Using "call" to invoke the "greet" method of the "person" object with "anotherPerson" as the "this" context.
person.greet.call(anotherPerson, "Hi");

// The apply() method is similar to call(), but it accepts arguments as an array or an array-like object. It's useful when you have an array of arguments that you want to pass to the function.
// Using "apply" to invoke the "greet" method of the "person" object with "anotherPerson" as the "this" context and an array of arguments.
const args = ["Hello"];
person.greet.apply(anotherPerson, args);

// The bind() method returns a new function with a specified this value and any initial arguments. It's useful when you want to create a new function with a fixed context and set arguments without actually invoking the function.
// Using "bind" to create a new function with "anotherPerson" as the fixed "this" context and a preset greeting.
const greetAnotherPerson = person.greet.bind(anotherPerson, "Hola");
greetAnotherPerson(); // Calling the bound function.

// Using "bind" to create a new function with "person" as the fixed "this" context and a preset greeting.
const greetPerson = person.greet.bind(person, "Bonjour");
greetPerson(); // Calling the bound function.
