// Exercise 1: Basic Switch Statement
// Convert day number to day name

// 1. Declare dayNumber and assign 3
let dayNumber = 3;


// 2. Declare dayName as empty string
let dayName = ' ';


// 3. Use switch statement:
//    case 1: dayName = 'Monday'; break;
//    case 2: dayName = 'Tuesday'; break;
//    ... continue for all 7 days
 switch (dayNumber) {
  case 1:
    dayName = 'Monday';
    break;

  case 2:
    dayName = 'Tuesday';
    break;

  case 3:
    dayName = 'Wednesday';
    break;

  case 4:
    dayName = 'Thursday';
    break;

  case 5:
    dayName = 'Friday';
    break;

  case 6:
    dayName = 'Saturday';
    break;

  case 7:
    dayName = 'Sunday';
    break;

  default:
    dayName = 'Invalid day number';
}


// Update the display
try {
  document.getElementById('day-num').textContent = dayNumber;
  document.getElementById('day-name').textContent = dayName || '???';
} catch(e) { console.log('Define all variables to see results!'); }
