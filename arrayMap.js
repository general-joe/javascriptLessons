// Exercise 4: Array Map
// Transform arrays with map()

// 1. Declare numbers array: [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];

// 2. Create doubled array using map (multiply each by 2)
const doubled = numbers.map((n) => n * 2);

// 3. Create squared array using map (n * n)
const squared = numbers.map((n) => n * n);

// Update the display
try {
  const showNums = (id, arr) => {
    const el = document.getElementById(id);
    el.innerHTML = "";
    arr.forEach((n) => {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = n;
      el.appendChild(div);
    });
  };

  showNums("original", numbers);
  showNums("doubled", doubled);
  showNums("squared", squared);
} catch (e) {
  console.log("Define all variables to see results!");
}
