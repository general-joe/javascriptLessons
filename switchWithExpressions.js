// Exercise 5: Switch with Expressions
// Use switch(true) for range checking

// 1. Declare score and assign 87
let score = 87;


// 2. Declare grade as empty string
let grade = ' ';


// 3. Use switch(true) with comparison expressions:
//    case score >= 90: grade = 'A'; break;
//    case score >= 80: grade = 'B'; break;
//    case score >= 70: grade = 'C'; break;
//    case score >= 60: grade = 'D'; break;
//    default: grade = 'F';
switch (true) {
  case score >= 90:
    grade = 'A';
    break;

  case score >= 80:
    grade = 'B';
    break;

  case score >= 70:
    grade = 'C';
    break;

  case score >= 60:
    grade = 'D';
    break;

  default:
    grade = 'F';
}


// Update the display
try {
  document.getElementById('score').textContent = score;
  const gradeEl = document.getElementById('grade');
  gradeEl.textContent = grade || '?';
  gradeEl.className = 'grade ' + grade;
} catch(e) { console.log('Define all variables to see results!'); }
