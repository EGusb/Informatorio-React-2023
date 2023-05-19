function agregarNodo(nodoPadre, tag, clases = [], textContent = "") {
  const nodoHijo = document.createElement(tag);
  clases.forEach((clase) => nodoHijo.classList.add(clase));
  nodoHijo.textContent = textContent;
  nodoPadre.appendChild(nodoHijo);
  return nodoHijo;
}

const app = document.getElementById("app");

const titulo = agregarNodo(app, "h1", [], (textContent = "¡Calculame ésta!"));
const container = agregarNodo(app, "div", ["calculadora"]);
const display = agregarNodo(container, "div", ["display"], "0");
const containerBotones = agregarNodo(container, "div", ["boton-container"]);

const botones = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "AC",
  "=",
];
botones.forEach((num) =>
  agregarNodo(containerBotones, "button", ["calc-boton"], num)
);

const operadores = ["+", "-", "x", "/"];
operadores.forEach((op) =>
  agregarNodo(containerBotones, "button", ["calc-boton", "operacion"], op)
);
