// Exercise 3: Else If Chain
// Calculate letter grade based on score

// 1. Declare score and assign 85
let score = 85;


// 2. Declare grade as an empty string
let grade = ' ';


// 3. Use else-if chain to set grade:
//    - if score >= 90: grade = 'A'
//    - else if score >= 80: grade = 'B'
//    - else if score >= 70: grade = 'C'
//    - else if score >= 60: grade = 'D'
//    - else: grade = 'F'
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C'
} else if (score >= 60) {
  grade = 'D'
} else {
  grade = 'F'
}



// Update the display
try {
  document.getElementById('score').textContent = score;
  const gradeEl = document.getElementById('grade');
  gradeEl.textContent = grade;
  gradeEl.className = 'grade ' + grade;
} catch(e) { console.log('Define all variables to see results!'); }
