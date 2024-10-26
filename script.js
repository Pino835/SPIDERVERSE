function filterCards() {
    // Obtener el valor ingresado en el input
    let input = document.getElementById('input-box');
    let filter = input.value.toUpperCase(); // Convertir a mayúsculas para comparación sin distinción entre mayúsculas y minúsculas

    // Obtener todos los contenedores con la clase container1
    let containers = document.getElementsByClassName('container1');

    // Recorrer cada contenedor
    for (let j = 0; j < containers.length; j++) {
        let cards = containers[j].getElementsByClassName('card');

        // Recorrer todas las tarjetas en el contenedor actual
        for (let i = 0; i < cards.length; i++) {
            let h4 = cards[i].getElementsByTagName("h4")[0];
            let p = cards[i].getElementsByTagName("p")[0];
            let txtValue = h4.textContent || h4.innerText;
            let txtValue2 = p.textContent || p.innerText;

            // Verificar si el texto coincide con el filtro
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";  // Mostrar tarjeta
            } else {
                cards[i].style.display = "none";  // Ocultar tarjeta
            }
        }
    }
}

// Función para cargar la información del personaje desde el archivo JSON
async function loadPerson() {
    try {
        // Obtener el parámetro 'name' de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');

        // Cargar el archivo JSON
        const response = await fetch('spiderverse.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const people = await response.json();

        // Buscar el personaje en el archivo JSON
        const person = people.find(p => p.alias === name);

        // Mostrar la información del personaje
        if (person) {
            document.getElementById('name').textContent = person.name;
            document.getElementById('alias').textContent = person.alias;
            document.getElementById('data').textContent = person.data;
            document.getElementById('image').src = person.image;
        } else {
            alert('Personaje no encontrado en el archivo JSON');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        alert('Hubo un error al cargar los datos del personaje');
    }
}