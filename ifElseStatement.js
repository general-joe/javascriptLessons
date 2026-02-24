// Exercise 2: If-Else Statement
// Check if a score is passing or failing

// 1. Declare score and assign 75
let score = 75;


// 2. Declare passingScore as a constant with value 60
const passingScore = 60;


// 3. Declare status as an empty string
let status = ' ';


// 4. Use if-else: if score >= passingScore, status = 'PASSED', else status = 'FAILED'
if (score >= passingScore) {
  status = 'PASSED';
} else {
  status = 'FAILED';
}


// Update the display
try {
  document.getElementById('score').textContent = score;
  document.getElementById('passing').textContent = passingScore;
  const statusEl = document.getElementById('status');
  statusEl.textContent = status;
  statusEl.className = 'status ' + status.toLowerCase();
} catch(e) { console.log('Define all variables to see results!'); }
