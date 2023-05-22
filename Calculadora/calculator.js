function addNode(fatherNode, tag, classes = [], attrs = {}) {
  const childNode = document.createElement(tag);
  classes.forEach((_class) => childNode.classList.add(_class)); // Seteo las clases
  for (let k in attrs) childNode.setAttribute(k, attrs[k]); // Seteo los atributos
  fatherNode.appendChild(childNode);
  return childNode;
}

function appendValue(newValue) {
  const opers = ["+", "-", "*", "/", ".", "%"]; // Operaciones
  const currentResult = document.getElementById("result"); // Objeto resultado actual
  const currentLastChar = currentResult.value.slice(-1); // Último char del resultado actual
  const currentLastCharIsOper = opers.indexOf(currentLastChar) > -1; // ¿El valor actual del display es una operacion?
  const newValueIsOper = opers.indexOf(newValue) > -1; // ¿El valor nuevo es una operacion?

  if (currentLastCharIsOper && newValueIsOper) {
    // Ultimo char y nuevo valor son operadores
    currentResult.value = currentResult.value.slice(0, -1) + newValue; // Se coloca el nuevo operador en lugar del anterior
  } else if (currentResult.value === "0") {
    // Si antes hay solo "0", se reemplaza
    currentResult.value = newValue;
  } else {
    currentResult.value += newValue;
  }
}

function calculate() {
  const currentResult = document.getElementById("result");
  const n = eval(currentResult.value);
  currentResult.value = n;
}

function clearDisplay() {
  document.getElementById("result").value = "0";
}

function changeSign() {
  calculate();
  const currentResult = document.getElementById("result");
  currentResult.value = -1 * currentResult.value;
}

function deleteLastChar() {
  const currentResult = document.getElementById("result");
  if (currentResult.value.length === 1) {
    clearDisplay();
  } else {
    currentResult.value = currentResult.value.slice(0, -1);
  }
}

function changeTheme() {
  document.body.classList.toggle("theme-dark");

  if (document.body.classList.contains("theme-dark")) {
    document.getElementById("themeButton").value = "Tema Claro";
  } else {
    document.getElementById("themeButton").value = "Tema Oscuro";
  }
}

// Manejar el input
function handleEvent(value) {
  const numsAndOpers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%"];

  if (numsAndOpers.indexOf(value) > -1) appendValue(value);
  else if (value === "." || value === ",") appendValue(".");
  else if (value === "backspace" || value === "←") deleteLastChar();
  else if (value === "escape" || value === "AC") clearDisplay();
  else if (value === "enter" || value === "=") calculate();
  else if (value === "±") changeSign();
}

function createApp() {
  const app = document.getElementById("app");

  const title = addNode(app, "h1", ["title"]);
  title.textContent = "My Calculator";
  const calculator = addNode(app, "div", ["calculator"]);

  const displayNode = addNode(calculator, "div", ["display"], { id: "display" });
  const result = addNode(displayNode, "input", [], { id: "result", type: "text", value: "0", disabled: "" });

  const btnGrid = addNode(calculator, "div", [], { id: "btn-grid" });
  const buttons = [
    ["AC", "±", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "←", "="],
  ];

  buttons.forEach((rowItems, rowIndex) => {
    const rowDiv = addNode(btnGrid, "div", ["row"], { id: `row${rowIndex}` });
    rowItems.forEach((item) => addNode(rowDiv, "input", ["btn"], { type: "button", value: item }));
  });

  //Botón de cambio de tema
  const modo = addNode(app, "input", ["btn"], { type: "button", value: "Tema Oscuro", onclick: "changeTheme()", id: "themeButton" });

  // Event listener de click
  btnGrid.addEventListener("click", ({ target: { type, value } }) => {
    if (type === "button") handleEvent(value);
  });

  // Event listener del teclado
  document.addEventListener("keydown", ({ key }) => handleEvent(key.toLowerCase()));
}

createApp();
