// Exercise 1: Basic If Statement
// Check if someone is old enough to vote

// 1. Declare age and assign 18
let age = 18;


// 2. Declare canVote and assign false initially
let canVote = false;


// 3. Use an if statement: if age >= 18, set canVote to true
if (age >= 18) {
  canVote = true;
}


// Update the display (runs after you define variables)
try {
  document.getElementById('age').textContent = age;
  const resultEl = document.getElementById('result');
  if (canVote) {
    resultEl.textContent = '✓ You can vote!';
    resultEl.className = 'result can-vote';
  } else {
    resultEl.textContent = '✗ Not old enough to vote';
    resultEl.className = 'result cannot-vote';
  }
} catch(e) { console.log('Define all variables to see results!'); }
