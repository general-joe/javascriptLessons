// Exercise 6: Nested For Loops
// Create a 3x3 multiplication table

// 1. Declare table as empty string
let table = "";

// 2. Outer loop: for (let i = 1; i <= 3; i++)
//    3. Inner loop: for (let j = 1; j <= 3; j++)
//       - Add (i * j) + ' ' to table
//    4. After inner loop, add '\n' to table

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    table += i * j + " ";
  }

  table += "\n";
}

// Update the display
try {
  document.getElementById("table").textContent = table || "Empty";

  // Visualize the grid
  const grid = document.getElementById("table-grid");
  grid.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.innerHTML = i * j + '<span class="calc">' + i + "×" + j + "</span>";
      grid.appendChild(cell);
    }
  }
} catch (e) {
  console.log("Define all variables to see results!");
}
