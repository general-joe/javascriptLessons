// Exercise 1: Function Declaration
// Create and call a simple function

// 1. Declare a function called sayHello that returns 'Hello, World!'
function sayHello() {
  // Return the greeting string
  return "Hello, World!";
}

// 2. Call the function and store result in greeting

let greeting = sayHello();
// Update the display
try {
  document.getElementById("greeting").textContent = greeting || "undefined";
} catch (e) {
  console.log("Define all variables to see results!");
}
