// Exercise 6: Nested Conditionals
// Movie ticket pricing based on age and time

// 1. Declare age as 25
const age = 25;


// 2. Declare isMatinee as true
const isMatinee = true;


// 3. Declare basePrice as 15
const basePrice = 15


// 4. Declare finalPrice and use nested if statements:
//    - if age < 12: finalPrice = 8 (child)
//    - else if age >= 65: finalPrice = 10 (senior)
//    - else (adult): if isMatinee: finalPrice = 10, else: finalPrice = basePrice

let finalPrice;

if (age < 12) {
  finalPrice = 8; // child
} else if (age >= 65) {
  finalPrice = 10; // senior
} else {
  // adult
  if (isMatinee) {
    finalPrice = 10;
  } else {
    finalPrice = basePrice;
  }
}



// Update the display
try {
  document.getElementById('age').textContent = age;
  document.getElementById('matinee').textContent = isMatinee ? 'Yes ☀️' : 'No 🌙';
  document.getElementById('price').textContent = '$' + finalPrice;
  
  let priceType = 'Regular';
  if (age < 12) priceType = 'Child Ticket';
  else if (age >= 65) priceType = 'Senior Discount';
  else if (isMatinee) priceType = 'Matinee Special';
  document.getElementById('price-type').textContent = priceType;
} catch(e) { console.log('Define all variables to see results!'); }
