// Exercise 7: Digit Sum Calculator
// Sum all digits in a number using while loop

// 1. Declare originalNumber as 98765 (const)
const originalNumber = 98765;

// 2. Declare num as originalNumber (let - we'll modify this)
let num = originalNumber;

// 3. Declare digitSum as 0
let digitSum = 0;

// 4. Declare digits as empty string
let digits = "";

// 5. While loop: while num > 0
//    - Extract last digit: digit = num % 10
//    - Add digit to digitSum
//    - Add digit + ' + ' to digits (building the expression)
//    - Remove last digit: num = Math.floor(num / 10)
while (num > 0) {
  let digit = num % 10;
  digitSum += digit;
  digits += digit + " + ";
  num = Math.floor(num / 10);
}

// Update the display
try {
  document.getElementById("original").textContent = originalNumber;
  document.getElementById("sum").textContent = digitSum;

  // Clean up the digits display (remove trailing ' + ')
  const cleanDigits = digits.slice(0, -3) || "No digits";
  document.getElementById("digits-display").textContent = cleanDigits;

  // Visualize extraction
  const extraction = document.getElementById("extraction");
  extraction.innerHTML = "";
  String(originalNumber)
    .split("")
    .reverse()
    .forEach((d, i) => {
      const box = document.createElement("div");
      box.className = "digit-box";
      box.textContent = d;
      box.setAttribute("data-order", "#" + (i + 1));
      extraction.appendChild(box);
    });
} catch (e) {
  console.log("Define all variables to see results!");
}
