// Exercise 7: Find Maximum Value
// Find the largest number in an array

// 1. Declare scores array: [72, 95, 88, 64, 91, 85]
let scores = [72, 95, 88, 64, 91, 85];

// 2. Declare max as scores[0] (first element)
let max = scores[0];

// 3. Declare maxIndex as 0
let maxIndex = 0;

// 4. For loop from i = 1 to scores.length - 1:
//    If scores[i] > max:
//      - max = scores[i]
//      - maxIndex = i

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > max) {
    max = scores[i];

    maxIndex = i;
  }
}

// Update the display
try {
  document.getElementById("max").textContent = max;
  document.getElementById("maxIndex").textContent = maxIndex;

  // Visualize with max highlighted
  const display = document.getElementById("scores-display");
  display.innerHTML = "";
  scores.forEach((score, i) => {
    const item = document.createElement("div");
    item.className = "score-item";
    item.innerHTML =
      '<span class="index">[' +
      i +
      ']</span><div class="value' +
      (i === maxIndex ? " max" : "") +
      '">' +
      score +
      "</div>";
    display.appendChild(item);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
