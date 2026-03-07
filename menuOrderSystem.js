// Exercise 6: Menu Order System
// Calculate order price with item and size

// 1. Declare menuItem and assign 'burger'
let menuItem = 'burger';


// 2. Declare size and assign 'large'
let size = 'large';


// 3. Declare basePrice using switch on menuItem:
//    'burger' → 8, 'pizza' → 12, 'salad' → 6, 'combo' → 15, default → 0
let basePrice;

switch (menuItem) {
  case 'burger':
    basePrice = 8;
    break;

  case 'pizza':
    basePrice = 12;
    break;

  case 'salad':
    basePrice = 6;
    break;

  case 'combo':
    basePrice = 15;
    break;

  default:
    basePrice = 0;
}


// 4. Declare sizeMultiplier using switch on size:
//    'small' → 0.8, 'medium' → 1, 'large' → 1.3, default → 1
let sizeMultiplier;

switch (size) {
  case 'small':
    sizeMultiplier = 0.8;
    break;

  case 'medium':
    sizeMultiplier = 1;
    break;

  case 'large':
    sizeMultiplier = 1.3;
    break;

  default:
    sizeMultiplier = 1;
}



// 5. Calculate totalPrice (basePrice * sizeMultiplier)
let totalPrice = basePrice * sizeMultiplier;


// Update the display
try {
  document.getElementById('item').textContent = menuItem;
  document.getElementById('size').textContent = size;
  document.getElementById('base').textContent = basePrice;
  document.getElementById('mult').textContent = sizeMultiplier;
  document.getElementById('total').textContent = totalPrice.toFixed(2);
} catch(e) { console.log('Define all variables to see results!'); }
