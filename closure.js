// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

function hello(name) { 
	var message = "hello " + name; 
	return function hello() { 
		console.log(message); 
	}; 
} 

//generate closure 
var helloWorld = hello("World"); 

//use closure 
helloWorld();