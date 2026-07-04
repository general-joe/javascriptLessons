// Exercise 5: Array Filter
// Filter arrays based on conditions

// 1. Declare scores array: [45, 82, 91, 67, 55, 78, 94, 38]
const scores = [45, 82, 91, 67, 55, 78, 94, 38];

// 2. Filter passing scores (>= 60)
const passing = scores.filter((s) => s >= 60);

// 3. Filter failing scores (< 60)
const failing = scores.filter((s) => s < 60);

// 4. Filter excellent scores (>= 90)
const excellent = scores.filter((s) => s >= 90);

// Update the display
try {
  // Show all scores with color coding
  const grid = document.getElementById("scores-grid");
  grid.innerHTML = "";
  scores.forEach((s) => {
    const chip = document.createElement("span");
    chip.className =
      "score-chip " + (s >= 90 ? "excellent" : s >= 60 ? "pass" : "fail");
    chip.textContent = s;
    grid.appendChild(chip);
  });

  document.getElementById("passing").textContent =
    "[" + passing.join(", ") + "]";
  document.getElementById("passing-count").textContent =
    passing.length + " scores";
  document.getElementById("failing").textContent =
    "[" + failing.join(", ") + "]";
  document.getElementById("failing-count").textContent =
    failing.length + " scores";
  document.getElementById("excellent").textContent =
    "[" + excellent.join(", ") + "]";
  document.getElementById("excellent-count").textContent =
    excellent.length + " scores";
} catch (e) {
  console.log("Define all variables to see results!");
}
