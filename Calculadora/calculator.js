function addNode(fatherNode, tag, classes = [], attrs = {}) {
  const childNode = document.createElement(tag);
  classes.forEach((_class) => childNode.classList.add(_class)); // Seteo las clases
  for (let k in attrs) childNode.setAttribute(k, attrs[k]); // Seteo los atributos
  fatherNode.appendChild(childNode);
  return childNode;
}

function appendValue(newValue) {
  const opers = ["+", "-", "*", "/", ".", "%"];
  const typed = document.getElementById("typed");
  const currentLastChar = typed.value.slice(-1); // Último char del resultado actual
  const currentLastCharIsOper = opers.indexOf(currentLastChar) > -1; // ¿El valor actual del display es una operacion?
  const newValueIsOper = opers.indexOf(newValue) > -1; // ¿El valor nuevo es una operacion?

  if (currentLastCharIsOper && newValueIsOper) typed.value = typed.value.slice(0, -1) + newValue;
  else if (typed.value === "0") typed.value = newValue;
  else typed.value += newValue;
}

function calculate() {
  const result = document.getElementById("result");
  const typed = document.getElementById("typed");
  result.value = eval(typed.value);
}

function clearDisplay() {
  document.getElementById("typed").value = "0";
  document.getElementById("result").value = "0";
}

function changeSign() {
  calculate();
  const result = document.getElementById("result");
  const typed = document.getElementById("typed");
  result.value = -1 * result.value;
  typed.value = result.value;
}

function deleteLastChar() {
  const result = document.getElementById("result");
  result.value.length === 1 ? clearDisplay() : (result.value = result.value.slice(0, -1));
}

function changeTheme() {
  const classList = document.body.classList;
  const themeBtn = document.getElementById("themeButton");
  classList.toggle("theme-dark");
  classList.contains("theme-dark") ? (themeBtn.value = "Tema Claro") : (themeBtn.value = "Tema Oscuro");
}

// Manejar el input
function handleEvent(value) {
  const numsAndOpers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%"];

  numsAndOpers.indexOf(value) > -1 && appendValue(value);
  (value === "." || value === ",") && appendValue(".");
  (value === "backspace" || value === "←") && deleteLastChar();
  (value === "escape" || value === "AC") && clearDisplay();
  (value === "enter" || value === "=") && calculate();
  value === "±" && changeSign();
}

function createApp() {
  const app = document.getElementById("app");

  const title = addNode(app, "h1", ["title"]);
  title.textContent = "My Calculator";
  const calculator = addNode(app, "div", ["calculator"]);

  const display = addNode(calculator, "div", ["display"], { id: "display" });
  const typed = addNode(display, "input", [], { id: "typed", type: "text", value: "", disabled: "" });
  const result = addNode(display, "input", [], { id: "result", type: "text", value: "0", disabled: "" });

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
    rowItems.forEach((item, itemIndex) =>
      addNode(rowDiv, "input", ["btn"], { type: "button", value: item, id: `item${rowIndex}${itemIndex}` })
    );
  });

  document.getElementById("item00").classList.add("ac");

  //Botón de cambio de tema
  addNode(app, "input", [], { type: "button", value: "Tema Oscuro", onclick: "changeTheme()", id: "themeButton" });

  // Event listener de click
  btnGrid.addEventListener("click", ({ target: { type, value } }) => type === "button" && handleEvent(value));

  // Event listener del teclado
  document.addEventListener("keydown", ({ key }) => handleEvent(key.toLowerCase()));
}

createApp();
