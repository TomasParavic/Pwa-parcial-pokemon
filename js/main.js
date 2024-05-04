const listaPokemon = document.querySelector("#listaPokemon");
const detallePokemon = document.querySelector("#detallePokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";




//recorremos hasta 100 
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
    a.href = `detalle.html?id=${pokeId}`;  // Enviar el ID como parámetro en la URL
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

    listaPokemon.append(a);
}



// aca mostramos solo 1 pokemon dsps de clickear uno, lo buscamos mediante el ID de la URL
function mostrarDetallePokemon(poke) {
    const container = document.getElementById('detallePokemon');
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    container.innerHTML = `
        <div class="pokemon">
            <div class="pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div>
                    <h1>${poke.name}</h1>
                    <p>ID: #${poke.id}</p>
                </div>
                <div class="pokemon-tipos">
                ${tipos}
                </div>
                <div class="pokemon-stats">
                <p class="stat">${poke.height/10}m</p>
                <p class="stat">${poke.weight/10}kg</p>
                </div>
            </div>
        </div>
    `;
}

if (document.getElementById('detallePokemon')) {
    const params = new URLSearchParams(window.location.search);
    const pokemonId = params.get('id');
    if (pokemonId) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(data => mostrarDetallePokemon(data));
    } else {
        console.log("No se encontró el ID del Pokémon en la URL");
    }
}