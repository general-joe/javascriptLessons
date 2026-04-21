// Exercise 4: Find First Multiple
// Find first multiple of 7 greater than 50

// 1. Declare number as 1
let number = 1;

// 2. Declare found as 0
let found = 0;

// 3. While loop: while found === 0
//    - If number % 7 === 0 AND number > 50, set found = number
//    - Increment number
while (found === 0) {
  if (number % 7 === 0 && number > 50) {
    found = number;
  }
  number++;
}

// Update the display
try {
  document.getElementById("checked").textContent = number - 1;
  document.getElementById("found").textContent = found;
  document.getElementById("progress").style.width =
    Math.min((number / 60) * 100, 100) + "%";

  if (found > 0) {
    document.getElementById("verify").textContent =
      found + " ÷ 7 = " + found / 7 + " ✓ and " + found + " > 50 ✓";
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
