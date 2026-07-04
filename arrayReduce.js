// Exercise 6: Array Reduce
// Reduce arrays to single values

// 1. Declare prices array: [29.99, 9.99, 4.99, 19.99]
const prices = [29.99, 9.99, 4.99, 19.99];

// 2. Calculate total using reduce (sum all prices)
// Hint: prices.reduce((sum, price) => sum + price, 0)
const total = prices.reduce((sum, price) => sum + price, 0);

// 3. Find max using reduce
// Hint: prices.reduce((m, p) => p > m ? p : m, prices[0])
const max = prices.reduce((m, p) => (p > m ? p : m), prices[0]);

// Update the display
try {
  // Show prices with max highlighted
  const list = document.getElementById("prices-list");
  list.innerHTML = "";
  prices.forEach((p) => {
    const tag = document.createElement("span");
    tag.className = "price-tag" + (p === max ? " max" : "");
    tag.textContent = "$" + p.toFixed(2);
    list.appendChild(tag);
  });

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("max").textContent = max.toFixed(2);
} catch (e) {
  console.log("Define all variables to see results!");
}
