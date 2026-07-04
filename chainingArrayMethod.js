// Exercise 7: Chaining Array Methods
// Combine filter, map, and reduce

// 1. Declare products array with objects:
// [{name: 'Apple', price: 1.5}, {name: 'Banana', price: 0.75},
//  {name: 'Orange', price: 2.0}, {name: 'Grape', price: 3.5}]
const products = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 2.0 },
  { name: "Grape", price: 3.5 },
];

// 2. Chain filter + map to get names of expensive products (price > 1)
// Hint: products.filter(p => p.price > 1).map(p => p.name)
const expensiveNames = products.filter((p) => p.price > 1).map((p) => p.name);

// 3. Chain filter + reduce to get total of expensive products
// Hint: products.filter(p => p.price > 1).reduce((sum, p) => sum + p.price, 0)
const totalExpensive = products
  .filter((p) => p.price > 1)
  .reduce((sum, p) => sum + p.price, 0);

// Update the display
try {
  // Show products table
  const rows = document.getElementById("products-rows");
  rows.innerHTML = "";
  products.forEach((p) => {
    const row = document.createElement("div");
    row.className = "product-row";
    const isExpensive = p.price > 1;
    row.innerHTML =
      '<span class="name">' +
      p.name +
      "</span><span>$" +
      p.price.toFixed(2) +
      '</span><span class="status ' +
      (isExpensive ? "expensive" : "cheap") +
      '">' +
      (isExpensive ? "💰 Expensive" : "Budget") +
      "</span>";
    rows.appendChild(row);
  });

  document.getElementById("expensive-names").textContent =
    "[" + expensiveNames.join(", ") + "]";
  document.getElementById("total-expensive").textContent =
    totalExpensive.toFixed(2);
} catch (e) {
  console.log("Define all variables to see results!");
}
