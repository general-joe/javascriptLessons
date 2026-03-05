// Exercise 3: Fall-Through Behavior
// Group months into seasons using fall-through

// 1. Declare month and assign 7
let month = 7;


// 2. Declare season as empty string
let season = ' ';


// 3. Use switch with fall-through to group seasons:
//    case 12: case 1: case 2: season = 'Winter'; break;
//    case 3: case 4: case 5: season = 'Spring'; break;
//    case 6: case 7: case 8: season = 'Summer'; break;
//    case 9: case 10: case 11: season = 'Fall'; break;
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;

  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;

  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;

  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;

  default:
    season = "Invalid month";
}

// Update the display
try {
  const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('month').textContent = monthNames[month] + ' (' + month + ')';
  
  const icons = { Winter: '❄️', Spring: '🌸', Summer: '☀️', Fall: '🍂' };
  const seasonEl = document.getElementById('season');
  seasonEl.className = 'season-display ' + season;
  seasonEl.innerHTML = '<span class="season-icon">' + (icons[season] || '❓') + '</span><span class="season-name">' + (season || '???') + '</span>';
} catch(e) { console.log('Define all variables to see results!'); }
