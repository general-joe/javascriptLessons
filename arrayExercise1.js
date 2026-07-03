// Exercise 1: Creating and Accessing Arrays
// Create an array and access elements

// 1. Declare colors array: ['red', 'green', 'blue', 'yellow']
const colors = ["red", "green", "blue", "yellow"];

// 2. Get first color (index 0)
const firstColor = colors[0];

// 3. Get last color (index length - 1)
const lastColor = colors[colors.length - 1];

// 4. Get array length
const arrayLength = colors.length;

// Update the display
try {
  document.getElementById("first").textContent = firstColor;
  document.getElementById("last").textContent = lastColor;
  document.getElementById("length").textContent = arrayLength;

  // Visualize the array
  const visual = document.getElementById("array-visual");
  visual.innerHTML = "";
  colors.forEach((color, i) => {
    const item = document.createElement("div");
    item.className = "array-item";
    const isFirst = i === 0;
    const isLast = i === colors.length - 1;
    item.innerHTML =
      '<span class="index">[' +
      i +
      ']</span><div class="value' +
      (isFirst ? " first" : "") +
      (isLast ? " last" : "") +
      '">' +
      color +
      "</div>";
    visual.appendChild(item);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
