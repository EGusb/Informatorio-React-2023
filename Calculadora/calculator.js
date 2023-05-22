function addNode(fatherNode, tag, classes = [], textContent = "", attrs = {}, wrapperTag = "") {
  const childNode = document.createElement(tag);
  childNode.textContent = textContent;
  classes.forEach((_class) => childNode.classList.add(_class));

  for (let k in attrs) {
    childNode.setAttribute(k, attrs[k]);
  }

  if (wrapperTag) {
    const wrap = document.createElement(wrapperTag);
    fatherNode.appendChild(wrap);
    wrap.appendChild(childNode);
  } else {
    fatherNode.appendChild(childNode);
  }
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
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.classList.add("dark");
    document.getElementById("themeButton").value = "Tema Claro";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("themeButton").value = "Tema Oscuro";
  }
}

let darkTheme = false;
const app = document.getElementById("app");

const titulo = addNode(app, "h1", [], (textContent = "My Calculator"));
const calcTable = addNode(app, "table", ["calculator"]);

const row1 = addNode(calcTable, "tr");
const displayNode = addNode(row1, "td", ["display"], "", (attrs = { colspan: "4" }));
const result = addNode(displayNode, "input", ["result"], "", { id: "result", type: "text", value: "0", disabled: "" });

const row2 = addNode(calcTable, "tr");
const btn21 = addNode(row2, "input", ["btn"], "", { type: "button", value: "AC", onclick: "clearDisplay()" }, (wrapperTag = "td"));
const btn22 = addNode(row2, "input", ["btn"], "", { type: "button", value: "±", onclick: "changeSign()" }, (wrapperTag = "td"));
const btn23 = addNode(row2, "input", ["btn"], "", { type: "button", value: "mod", onclick: "appendValue('%')" }, (wrapperTag = "td"));
const btn24 = addNode(row2, "input", ["btn"], "", { type: "button", value: "/", onclick: "appendValue('/')" }, (wrapperTag = "td"));

const row3 = addNode(calcTable, "tr");
const btn31 = addNode(row3, "input", ["btn"], "", { type: "button", value: "7", onclick: "appendValue('7')" }, (wrapperTag = "td"));
const btn32 = addNode(row3, "input", ["btn"], "", { type: "button", value: "8", onclick: "appendValue('8')" }, (wrapperTag = "td"));
const btn33 = addNode(row3, "input", ["btn"], "", { type: "button", value: "9", onclick: "appendValue('9')" }, (wrapperTag = "td"));
const btn34 = addNode(row3, "input", ["btn"], "", { type: "button", value: "x", onclick: "appendValue('*')" }, (wrapperTag = "td"));

const row4 = addNode(calcTable, "tr");
const btn41 = addNode(row4, "input", ["btn"], "", { type: "button", value: "4", onclick: "appendValue('4')" }, (wrapperTag = "td"));
const btn42 = addNode(row4, "input", ["btn"], "", { type: "button", value: "5", onclick: "appendValue('5')" }, (wrapperTag = "td"));
const btn43 = addNode(row4, "input", ["btn"], "", { type: "button", value: "6", onclick: "appendValue('6')" }, (wrapperTag = "td"));
const btn44 = addNode(row4, "input", ["btn"], "", { type: "button", value: "-", onclick: "appendValue('-')" }, (wrapperTag = "td"));

const row5 = addNode(calcTable, "tr");
const btn51 = addNode(row5, "input", ["btn"], "", { type: "button", value: "1", onclick: "appendValue('1')" }, (wrapperTag = "td"));
const btn52 = addNode(row5, "input", ["btn"], "", { type: "button", value: "2", onclick: "appendValue('2')" }, (wrapperTag = "td"));
const btn53 = addNode(row5, "input", ["btn"], "", { type: "button", value: "3", onclick: "appendValue('3')" }, (wrapperTag = "td"));
const btn54 = addNode(row5, "input", ["btn"], "", { type: "button", value: "+", onclick: "appendValue('+')" }, (wrapperTag = "td"));

const row6 = addNode(calcTable, "tr");
const btn61 = addNode(row6, "input", ["btn"], "", { type: "button", value: "0", onclick: "appendValue('0')" }, (wrapperTag = "td"));
const btn62 = addNode(row6, "input", ["btn"], "", { type: "button", value: ".", onclick: "appendValue('.')" }, (wrapperTag = "td"));
const btn63 = addNode(row6, "input", ["btn"], "", { type: "button", value: "⌫", onclick: "deleteLastChar()" }, (wrapperTag = "td"));
const btn64 = addNode(row6, "input", ["btn"], "", { type: "button", value: "=", onclick: "calculate()" }, (wrapperTag = "td"));

//Botón de cambio de tema
const modo = addNode(app, "input", ["btn"], "", { type: "button", value: "Tema Oscuro", onclick: "changeTheme()", id: "themeButton" });

// Event listeners del teclado
document.addEventListener("keydown", function (event) {
  const numsAndOpers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%"];
  const key = event.key.toLowerCase();

  if (numsAndOpers.indexOf(key) > -1) {
    appendValue(key);
  } else if (key === "." || key === ",") {
    appendValue(".");
  } else if (key === "backspace") {
    deleteLastChar();
  } else if (key === "escape") {
    clearDisplay();
  } else if (key === "enter") {
    calculate();
  }
});
