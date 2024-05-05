const mostrarItem = (nombre) => {
    const lista = document.querySelector('#historial');
    const li = document.createElement('li');
    li.textContent = nombre; // Mostrar solo el nombre del Pokémon
    lista.insertBefore(li, lista.firstChild); // Agregar el elemento al principio de la lista
}

const mostrarHistorial = () => {
    const historial = JSON.parse(localStorage.getItem("historial") || "[]");
    historial.reverse().forEach(pokemon => { // Invertir el orden del historial antes de mostrarlo
        mostrarItem(pokemon.name);
    });
}

mostrarHistorial();
