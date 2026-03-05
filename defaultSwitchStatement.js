// Exercise 2: Switch with Default Case
// Traffic light control system

// 1. Declare lightColor and assign 'yellow'
let lightColor = 'yellow';


// 2. Declare action as empty string
let action = ' ';


// 3. Use switch statement with default:
//    case 'red': action = 'STOP'; break;
//    case 'yellow': action = 'CAUTION'; break;
//    case 'green': action = 'GO'; break;
//    default: action = 'INVALID COLOR';

switch (lightColor) {
  case 'red':
    action = 'STOP';
    break;

  case 'yellow':
    action = 'CAUTION';
    break;

  case 'green':
    action = 'GO';
    break;

  default:
    action = 'INVALID COLOR';
}


// Update the display
try {
  // Activate the correct light
  document.querySelectorAll('.light').forEach(l => l.classList.remove('active'));
  const activeLight = document.getElementById('light-' + lightColor);
  if (activeLight) activeLight.classList.add('active');
  
  const actionEl = document.getElementById('action');
  actionEl.textContent = action;
  actionEl.className = 'action ' + action;
} catch(e) { console.log('Define all variables to see results!'); }
