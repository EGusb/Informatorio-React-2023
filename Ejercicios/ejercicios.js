// 1. Definir una función "addFavoriteMovie()", que reciba un parámetro llamado "movieName".

// 2. Si lo que se recibió no es un string, mostrar por consola un error indicando que solo se aceptan cadenas de texto.

// 3. Si el nombre de la película que se recibe no contiene la palabra 'El' o "La", agregarlo a un array llamado "favoriteMovies"
// Ayuda: Investigá estos metodos 😉
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// 4. Definir una función llamada "showFavoritesMovies" que no reciba parametros

// 5. "showFavoriteMovies" debería mostrar por consola un mensaje similar a este: "Existen X películas en la lista de favoritos",
// donde X es la cantidad de películas que existen en favoritos. Y por último recorrer el array para imprimir por consola cada película favorita.

let favoriteMovies = [];
function addFavoriteMovie(movieName) {
  if (typeof movieName === "string") {
    if (!(movieName.includes("El") || movieName.includes("La"))) {
      favoriteMovies.push(movieName);
    }
  } else {
    console.error("Sólo se aceptan cadenas de texto.");
  }
}

function showFavoritesMovies() {
  console.log(
    `Existen ${favoriteMovies.length} películas en la lista de favoritos:`
  );
  favoriteMovies.forEach((movie) => console.log(movie));
}

addFavoriteMovie("El Gran Gatsby");
addFavoriteMovie("Terminator 2");
addFavoriteMovie("Jumanji");
addFavoriteMovie("Batman");
addFavoriteMovie("Los Puentes de Madison");
addFavoriteMovie("Mi Gran Casamiento Griego");
addFavoriteMovie("La Gran Estafa");

showFavoritesMovies();
