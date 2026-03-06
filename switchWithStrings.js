// Exercise 4: Switch with Strings
// Build a command interpreter

// 1. Declare command and assign 'help'
let command = 'help';



// 2. Declare response as empty string
let response = ' ';

// 3. Use switch on command:
//    case 'start': response = 'Starting...'; break;
//    case 'stop': response = 'Stopping...'; break;
//    case 'help': response = 'Available: start, stop, status'; break;
//    case 'status': response = 'Running'; break;
//    default: response = 'Unknown command';
switch (command) {
  case 'start':
    response = 'Starting...';
    break;

  case 'stop':
    response = 'Stopping...';
    break;

  case 'help':
    response = 'Available: start, stop, status';
    break;

  case 'status':
    response = 'Running';
    break;

  default:
    response = 'Unknown command';
}


// Update the display
try {
  document.getElementById('command').textContent = command;
  document.getElementById('response').textContent = response || 'No response';
} catch(e) { console.log('Define all variables to see results!'); }
