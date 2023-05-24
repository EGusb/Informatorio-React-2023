// Función para obtener los datos de la API
function getCharacterData() {
  const app = document.getElementById("app");

  // Obtener el contenedor donde se mostrarán los personajes
  const characterList = document.createElement("ul");
  app.appendChild(characterList);

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      // Obtener la lista de personajes
      const characters = data.results;

      // Recorrer la lista de personajes y mostrar los datos en pantalla
      characters.forEach((character) => {
        const { name, species, image } = character;

        // Crear elementos HTML para mostrar los datos
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        const characterImage = document.createElement("img");
        characterImage.classList.add("char-img");

        const characterName = document.createElement("p");
        characterName.classList.add("char-name");

        const characterSpecies = document.createElement("p");
        characterSpecies.classList.add("char-species");

        // Establecer los valores de los elementos
        characterImage.src = image;
        characterName.textContent = `Nombre: ${name}`;
        characterSpecies.textContent = `Especie: ${species}`;

        // Agregar los elementos al contenedor
        characterDiv.appendChild(characterName);
        characterDiv.appendChild(characterSpecies);
        characterDiv.appendChild(characterImage);
        characterList.appendChild(characterDiv);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Llamar a la función para obtener los datos y mostrarlos en pantalla
getCharacterData();
