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
const display = agregarNodo(container, "div", ["display"]);
const resultado = agregarNodo(display, "h3", ["resultado"], textContent = "0");
const containerBotones = agregarNodo(container, "div", ["btn-container"]);

const botones = [
  { texto: "AC", clases: [] },
  { texto: "/", clases: [] },
  { texto: "x", clases: [] },
  { texto: "-", clases: [] },
  { texto: "7", clases: [] },
  { texto: "8", clases: [] },
  { texto: "9", clases: [] },
  { texto: "+", clases: ["btn-suma"] },
  { texto: "4", clases: [] },
  { texto: "5", clases: [] },
  { texto: "6", clases: [] },
  { texto: "1", clases: [] },
  { texto: "2", clases: [] },
  { texto: "3", clases: [] },
  { texto: "=", clases: ["btn-igual"] },
  { texto: "0", clases: ["btn-cero"] },
  { texto: ".", clases: [] },
];

botones.forEach(({ texto, clases }) =>
  agregarNodo(containerBotones, "button", ["btn", ...clases], texto)
);
