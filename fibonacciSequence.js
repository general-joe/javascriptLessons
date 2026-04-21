// Exercise 6: Fibonacci Sequence
// Generate Fibonacci numbers until > 100

// 1. Declare a as 0
let a = 0;

// 2. Declare b as 1
let b = 1;

// 3. Declare sequence as '0 1 '
let sequence = "0 1 ";

// 4. While loop: while a + b <= 100
//    - Calculate next = a + b
//    - Add next + ' ' to sequence
//    - Shift values: a = b, then b = next
while (a + b <= 100) {
  let next = a + b;
  sequence += next + " ";
  a = b;
  b = next;
}

// Update the display
try {
  document.getElementById("sequence").textContent = sequence;
  document.getElementById("val-a").textContent = a;
  document.getElementById("val-b").textContent = b;

  // Visualize the numbers
  const spiral = document.getElementById("spiral");
  spiral.innerHTML = "";
  const nums = sequence
    .trim()
    .split(" ")
    .map((n) => parseInt(n));
  nums.forEach((num, i) => {
    const span = document.createElement("span");
    span.className = "fib-num" + (i === nums.length - 1 ? " highlight" : "");
    span.textContent = num;
    spiral.appendChild(span);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
