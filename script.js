// Exercise 5: Working with Multiple Variables
// Build a shopping cart calculation

// 1. Declare item variables
const item1Name = 'T-Shirt';
const item2Name = 'Jeans';
const item3Name = 'Sneakers';



// 2. Declare item prices
const item1Price = 25;
const item2Price = 65;
const item3Price = 120;

// 3. Calculate subtotal
const subtotal = item1Price + item2Price + item3Price;



// 4. Declare taxRate as 0.08
const taxRate = 0.08;


// 5. Calculate tax
const tax = subtotal * taxRate;


// 6. Calculate total
const total = subtotal + tax;


// Update the UI (provided code)
const itemsContainer = document.getElementById('items');
itemsContainer.innerHTML = `
  <div class="item"><span>${item1Name}</span><span class="item-price">$${item1Price}</span></div>
  <div class="item"><span>${item2Name}</span><span class="item-price">$${item2Price}</span></div>
  <div class="item"><span>${item3Name}</span><span class="item-price">$${item3Price}</span></div>
`;

document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
document.getElementById('tax').textContent = '$' + tax.toFixed(2);
document.getElementById('total').textContent = '$' + total.toFixed(2);

console.log('Subtotal:', subtotal);
console.log('Tax:', tax);
console.log('Total:', total);
