const detallePokemon = document.querySelector("#detallePokemon");


const detallePoke = JSON.parse(localStorage.getItem('selectedPokemon'));

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

mostrarDetallePokemon (detallePoke);

