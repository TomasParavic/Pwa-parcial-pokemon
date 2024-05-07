const listaPokemon = document.querySelector("#listaPokemon");
const detallePokemon = document.querySelector("#detallePokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Cargar historial desde localStorage
let historial = JSON.parse(localStorage.getItem('historial')) || [];

// Recorrer la API y mostrar los Pokémon
for (let i = 1; i <= 100; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    const a = document.createElement("a");
    a.href = `detalle.html?id=${pokeId}`;
    a.classList.add("pokemon-link");
    
    a.innerHTML = `
        <div class="pokemon">
            <div class="pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokeId}</p>
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                </div>
            </div>
        </div>
    `;
    
    a.addEventListener('click', function() {
        localStorage.setItem('selectedPokemon', JSON.stringify(poke));
        agregarAlHistorial(poke); // Agregar el Pokémon al historial
    });

    listaPokemon.appendChild(a);
}

function agregarAlHistorial(poke) {
    historial.push(poke);
    localStorage.setItem('historial', JSON.stringify(historial));
}


//-----------------BUSQUEDA------------------

//no llegue :(