function createTimer(message, delay) {
    // The inner function, which is returned and forms a closure
    function timerFunction() {
        console.log(message); // Log the captured message
    }

    // Set a timer to execute the inner function after the specified delay
    setTimeout(timerFunction, delay);

    // Return the inner function
    return timerFunction;
}

// Create timers with different messages and delays
const timer1 = createTimer("Timer 1: Hello, World!", 2000); // Logs "Timer 1: Hello, World!" after 2 seconds
const timer2 = createTimer("Timer 2: Goodbye, World!", 3000); // Logs "Timer 2: Goodbye, World!" after 3 seconds

// These timers demonstrate closures because they remember the message and delay values from when they were created.

console.log(timer1);
console.log(timer2);