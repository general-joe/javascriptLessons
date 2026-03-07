// Exercise 7: Game Character Stats
// Set character attributes based on class

// 1. Declare characterClass and assign 'mage'
let characterClass = 'mage';


// 2. Declare health, attack, defense, special as let  variables
let health, attack, defense, special;



// 3. Use switch on characterClass to set stats:
//    case 'warrior': health=100, attack=15, defense=20, special='Shield Bash'; break;
//    case 'mage': health=60, attack=25, defense=5, special='Fireball'; break;
//    case 'rogue': health=70, attack=20, defense=10, special='Backstab'; break;
//    case 'healer': health=80, attack=8, defense=15, special='Heal'; break;
//    default: health=75, attack=12, defense=12, special='Basic Attack';
switch (characterClass) {
  case 'warrior':
    health = 100;
    attack = 15;
    defense = 20;
    special = 'Shield Bash';
    break;

  case 'mage':
    health = 60;
    attack = 25;
    defense = 5;
    special = 'Fireball';
    break;

  case 'rogue':
    health = 70;
    attack = 20;
    defense = 10;
    special = 'Backstab';
    break;

  case 'healer':
    health = 80;
    attack = 8;
    defense = 15;
    special = 'Heal';
    break;

  default:
    health = 75;
    attack = 12;
    defense = 12;
    special = 'Basic Attack';
}


// Update the display
try {
  document.getElementById('class-name').textContent = characterClass;
  document.getElementById('health').textContent = health;
  document.getElementById('attack').textContent = attack;
  document.getElementById('defense').textContent = defense;
  document.getElementById('special').textContent = special;
} catch(e) { console.log('Define all variables to see results!'); }
