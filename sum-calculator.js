// Exercise 2: Sum Calculator
// Calculate sum of 1 to 10

// 1. Declare sum as 0
let sum = 0;

// 2. Declare num as 1
let num = 1;

// 3. Declare limit as 10 (const)
const limit = 10;

// 4. While loop: while num <= limit
//    - Add num to sum
//    - Increment num
while (num <= limit) {
  sum += num;
  num++;
}

// Update the display
try {
  document.getElementById("limit").textContent = limit;
  document.getElementById("sum").textContent = sum;

  // Visualize the addition
  const visual = document.getElementById("sum-visual");
  visual.innerHTML = "";
  for (let i = 1; i <= limit; i++) {
    if (i > 1) {
      const plus = document.createElement("span");
      plus.className = "plus-sign";
      plus.textContent = "+";
      visual.appendChild(plus);
    }
    const block = document.createElement("span");
    block.className = "num-block";
    block.textContent = i;
    visual.appendChild(block);
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
