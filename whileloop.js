// Exercise 1: Basic While Loop
// Count from 1 to 5

// 1. Declare counter and assign 1
let counter = 1;

// 2. Declare result as empty string
let result = "";

// 3. While loop: while counter <= 5
//    - Add counter + ' ' to result
//    - Increment counter
// Step 3: while loop
while (counter <= 5) {
  result = result + counter + " ";

  counter++;
}

// Update the display
try {
  document.getElementById("result").textContent = result || "Empty";
  document.getElementById("counter").textContent = counter;

  // Visualize the loop
  const visual = document.getElementById("loop-visual");
  visual.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.className = "loop-item";
    div.textContent = i;
    div.style.animationDelay = i * 0.1 + "s";
    visual.appendChild(div);
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
