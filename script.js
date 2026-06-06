let display = document.getElementById("display");

// Add number/operator
function append(value) {
  display.value += value;
}

// Add function like sin(
function appendFunc(func) {
  display.value += func;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    let expression = display.value;

    // Convert functions to degree-based
    expression = expression.replace(/sin\(([^)]+)\)/g, 
      "Math.sin(($1) * Math.PI / 180)");
      
    expression = expression.replace(/cos\(([^)]+)\)/g, 
      "Math.cos(($1) * Math.PI / 180)");
      
    expression = expression.replace(/tan\(([^)]+)\)/g, 
      "Math.tan(($1) * Math.PI / 180)");

    expression = expression.replace(/log/g, "Math.log10");

    let result = eval(expression);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}