// Exercise 5: Password Validator
// Find first valid password (6+ characters)

// 1. Declare passwords array with: 'hi', 'pass', 'abc123', 'secure99'
let passwords = ["hi", "pass", "abc123", "secure99"];

// 2. Declare index as 0
let index = 0;

// 3. Declare validPassword as empty string
let validPassword = "";

// 4. While loop: while validPassword === '' AND index < passwords.length
//    - If passwords[index].length >= 6, set validPassword = passwords[index]
//    - Else increment index
while (validPassword === "" && index < passwords.length) {
  if (passwords[index].length >= 6) {
    validPassword = passwords[index];
    break;
  }
  index++;
}

// Update the display
try {
  const listEl = document.getElementById("password-list");
  listEl.innerHTML = "";
  passwords.forEach((pw, i) => {
    const div = document.createElement("div");
    div.className = "password-item";
    const isValid = pw.length >= 6;
    const status =
      pw === validPassword ? "valid" : i < index ? "invalid" : "skipped";
    div.innerHTML =
      '<span class="password-text">' +
      pw +
      " (" +
      pw.length +
      " chars)</span>" +
      '<span class="password-status ' +
      status +
      '">' +
      (status === "valid"
        ? "✓ VALID"
        : status === "invalid"
          ? "✗ Too short"
          : "—") +
      "</span>";
    listEl.appendChild(div);
  });

  document.getElementById("valid").textContent = validPassword || "None found";
  document.getElementById("attempts").textContent = index + 1;
} catch (e) {
  console.log("Define all variables to see results!");
}
