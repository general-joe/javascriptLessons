// Exercise 4: Array Iteration
// Loop through an array of fruits

// 1. Declare fruits array with emojis
let fruits = ["🍎", "🍌", "🍋", "🍇", "🍓"];

// 2. Declare list as empty string
let list = "";

// 3. Use for loop: for (let i = 0; i < fruits.length; i++)
//    Inside: add fruits[i] + ' ' to list
for (let i = 0; i < fruits.length; i++) {
  list += fruits[i] + " ";
}

// Update the display
try {
  document.getElementById("list").textContent = list || "Empty";

  // Visualize array with indices
  const visual = document.getElementById("array-visual");
  visual.innerHTML = "";
  fruits.forEach((fruit, i) => {
    const item = document.createElement("div");
    item.className = "array-item";
    item.innerHTML =
      '<span class="index">[' +
      i +
      ']</span><div class="value">' +
      fruit +
      "</div>";
    visual.appendChild(item);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
