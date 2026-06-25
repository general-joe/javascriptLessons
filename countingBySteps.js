// Exercise 2: Counting by Steps
// Count even numbers from 2 to 10

// 1. Declare evens as empty string
let evens = "";

// 2. Use a for loop with step 2: for (let i = 2; i <= 10; i += 2)
//    Inside: add i + ' ' to evens

for (let i = 2; i <= 10; i += 2) {
  evens += i + " ";
}

// Update the display
try {
  document.getElementById("evens").textContent = evens || "Empty";

  // Show all numbers 1-10, highlight evens
  const grid = document.getElementById("number-grid");
  grid.innerHTML = "";
  for (let n = 1; n <= 10; n++) {
    const cell = document.createElement("div");
    cell.className = "num-cell " + (n % 2 === 0 ? "even" : "odd");
    cell.textContent = n;
    grid.appendChild(cell);
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
