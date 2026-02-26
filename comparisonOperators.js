// Exercise 4: Comparison Operators
// Compare two values using different operators

// 1. Declare a = 10 and b = 5
let a = 10;
let b = 5;


// 2. isEqual: check if a === b
let isEqual = a === b;


// 3. isNotEqual: check if a !== b
let isNotEqual = a !== b


// 4. isGreater: check if a > b
let isGreater = a > b;


// 5. isLessOrEqual: check if a <= b

let isLessOrEqual = a <= b;


// Update the display
try {
  document.getElementById('val-a').textContent = a;
  document.getElementById('val-b').textContent = b;
  
  const setResult = (id, value) => {
    const el = document.getElementById(id);
    el.textContent = value;
    el.className = 'result ' + value;
  };
  
  setResult('r-equal', isEqual);
  setResult('r-notequal', isNotEqual);
  setResult('r-greater', isGreater);
  setResult('r-lessequal', isLessOrEqual);
} catch(e) { console.log('Define all variables to see results!'); }
