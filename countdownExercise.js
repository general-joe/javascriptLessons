// Exercise 3: Countdown with For Loop
// Count from 5 to 1

// 1. Declare countdown as empty string
let countdown = "";

// 2. Use a for loop counting down: for (let i = 5; i >= 1; i--)
//    Inside: add i + ' ' to countdown
for (let i = 5; i >= 1; i--) {
  countdown += i + " ";
}

// Update the display
try {
  document.getElementById("countdown").textContent = countdown || "Empty";

  // Visualize countdown
  const visual = document.getElementById("countdown-visual");
  visual.innerHTML = "";
  for (let n = 5; n >= 1; n--) {
    const num = document.createElement("div");
    num.className = "count-num";
    num.textContent = n;
    visual.appendChild(num);
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
