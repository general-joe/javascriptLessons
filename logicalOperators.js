// Exercise 5: Logical Operators
// Build an access control system

// 1. Declare isLoggedIn as true
const isLoggedIn = true;


// 2. Declare isAdmin as false
const isAdmin = false;


// 3. Declare isPremium as true
const isPremium = true;


// 4. hasFullAccess: isLoggedIn AND isAdmin
const hasFullAccess = isLoggedIn && isAdmin;


// 5. canViewContent: isLoggedIn AND (isAdmin OR isPremium)
const canViewContent = isLoggedIn && (isAdmin || isPremium)


// 6. isGuest: NOT isLoggedIn
const isGuest = !isLoggedIn;


// Update the display
try {
  const setBadge = (id, value) => {
    const el = document.getElementById(id);
    el.textContent = value;
    el.className = 'badge ' + value;
  };
  
  setBadge('logged-in', isLoggedIn);
  setBadge('admin', isAdmin);
  setBadge('premium', isPremium);
  
  const setPermBadge = (id, value) => {
    const el = document.getElementById(id);
    el.textContent = value ? 'GRANTED' : 'DENIED';
    el.className = 'perm-badge ' + (value ? 'granted' : 'denied');
  };
  
  setPermBadge('full-access', hasFullAccess);
  setPermBadge('view-content', canViewContent);
  setPermBadge('is-guest', isGuest);
} catch(e) { console.log('Define all variables to see results!'); }
