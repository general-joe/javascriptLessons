// Exercise 1: Basic For Loop
// Count from 1 to 5

// 1. Declare result as empty string
let result = "";

// 2. Use a for loop: for (let i = 1; i <= 5; i++)
//    Inside: add i + ' ' to result
for (let i = 1; i <= 5; i++) {
  result += i + " ";
}

// Update the display
try {
  document.getElementById("result").textContent = result || "Empty";

  // Visualize iterations
  const iterEl = document.getElementById("iterations");
  iterEl.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const box = document.createElement("div");
    box.className = "iteration-box";
    box.textContent = i;
    box.style.animationDelay = i * 0.1 + "s";
    iterEl.appendChild(box);
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
