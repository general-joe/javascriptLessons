// Exercise 2: Push and Pop
// Add and remove from array end

// 1. Declare stack array: ['a', 'b', 'c']
const stack = ["a", "b", "c"];

// 2. Push 'd' to the stack
stack.push("d");

// 3. Push 'e' to the stack
stack.push("e");

// 4. Pop the last element and store in 'popped'
const popped = stack.pop();

// Update the display
try {
  document.getElementById("stack-result").textContent =
    "[" + stack.join(", ") + "]";
  document.getElementById("popped").textContent = popped;

  // Visualize the stack
  const visual = document.getElementById("stack-visual");
  visual.innerHTML = "";
  stack.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "stack-item" + (i >= 3 ? " pushed" : "");
    el.textContent = item;
    visual.appendChild(el);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
