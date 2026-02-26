// Exercise 7: Weather Advisory System
// Build a complete weather decision system

// 1. Declare temperature as 32
const temperature = 32;


// 2. Declare isRaining as true
const isRaining = true;


// 3. Declare windSpeed as 15
const windSpeed = 15;


// 4. Declare weatherStatus using else-if chain:
//    - < 32: 'FREEZING'
//    - 32-50: 'COLD'
//    - 51-70: 'MILD'
//    - 71-85: 'WARM'
//    - > 85: 'HOT'
let weatherStatus;

if (temperature < 32) {
    weatherStatus = "FREEZING";
} else if (temperature >= 32 && temperature <= 50) {
    weatherStatus = "COLD";
} else if (temperature >= 51 && temperature <= 70) {
    weatherStatus = "MILD";
} else if (temperature >= 71 && temperature <= 85) {
    weatherStatus = "WARM";
} else {
    weatherStatus = "HOT";
}


// 5. Declare needUmbrella: isRaining AND temperature > 32
let needUmbrella = isRaining && temperature > 32;


// 6. Declare stayIndoors: temp < 20 OR temp > 100 OR wind > 50
let stayIndoors = temperature < 20 || temperature > 100 || windSpeed > 50;


// Update the display
try {
  document.getElementById('temp').textContent = temperature;
  document.getElementById('rain-icon').textContent = isRaining ? '🌧️' : '☀️';
  document.getElementById('rain-text').textContent = isRaining ? 'Raining' : 'Clear';
  document.getElementById('wind').textContent = windSpeed;
  
  const statusEl = document.getElementById('status');
  statusEl.textContent = weatherStatus;
  statusEl.className = 'status ' + weatherStatus;
  
  document.getElementById('umbrella').textContent = needUmbrella ? 'YES' : 'NO';
  document.getElementById('umbrella-adv').className = 'advisory ' + (needUmbrella ? 'yes' : 'no');
  
  document.getElementById('indoors').textContent = stayIndoors ? 'YES' : 'NO';
  document.getElementById('indoor-adv').className = 'advisory ' + (stayIndoors ? 'yes' : 'no');
} catch(e) { console.log('Define all variables to see results!'); }
