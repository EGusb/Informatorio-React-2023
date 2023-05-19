const app = document.getElementById("app");

const titulo = document.createElement("h1");
titulo.textContent = "¡Calculame ésta!";

// Creo container de toda la calculadora
const container = document.createElement("div");
container.classList.add("grid-container");

app.appendChild(titulo);
app.appendChild(container);
