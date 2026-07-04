// Exercise 3: Shift and Unshift
// Add and remove from array beginning

// 1. Declare queue array: [2, 3, 4]
const queue = [2, 3, 4];

// 2. Unshift 1 to the front
queue.unshift(1);

// 3. Unshift 0 to the front
queue.unshift(0);

// 4. Shift the first element and store in 'shifted'
const shifted = queue.shift();

// Update the display
try {
  document.getElementById("queue-result").textContent =
    "[" + queue.join(", ") + "]";
  document.getElementById("shifted").textContent = shifted;

  // Visualize the queue
  const visual = document.getElementById("queue-visual");
  visual.innerHTML = "";
  queue.forEach((item, i) => {
    const el = document.createElement("div");
    el.className =
      "queue-item" +
      (i === 0 ? " front" : "") +
      (i === queue.length - 1 ? " back" : "");
    el.textContent = item;
    visual.appendChild(el);
  });
} catch (e) {
  console.log("Define all variables to see results!");
}
