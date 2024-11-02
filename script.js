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
            const nameElement = document.getElementById('name');
            nameElement.textContent = person.name;
            nameElement.setAttribute('data-text', person.name);
            document.getElementById('name').textContent = person.name;
            document.getElementById('alias').textContent = person.alias;
            document.getElementById('data').textContent = person.data;

            const imageElement = document.getElementById('image');
            imageElement.src = person.image;
            
            imageElement.classList.add(person.class);
        } else {
            alert('Personaje no encontrado en el archivo JSON');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        alert('Hubo un error al cargar los datos del personaje');
    }
}

function showHeroes() {
    // Mostrar contenedores de héroes
    document.getElementById("heroes-row1").style.display = "flex";
    document.getElementById("heroes-row2").style.display = "flex";
    document.getElementById("heroes-row3").style.display = "flex";
    document.getElementById("heroes-row4").style.display = "flex";
    document.getElementById("heroes-row5").style.display = "flex";
    
    // Ocultar contenedores de villanos
    document.getElementById("villains-row1").style.display = "none";
    document.getElementById("villains-row2").style.display = "none";

    document.getElementById("hero-btn").style.display = "none";
    document.getElementById("villain-btn").style.display = "inline-block";
}

function showVillains() {
    // Mostrar contenedores de villanos
    document.getElementById("villains-row1").style.display = "flex";
    document.getElementById("villains-row2").style.display = "flex";
    
    // Ocultar contenedores de héroes
    document.getElementById("heroes-row1").style.display = "none";
    document.getElementById("heroes-row2").style.display = "none";
    document.getElementById("heroes-row3").style.display = "none";
    document.getElementById("heroes-row4").style.display = "none";
    document.getElementById("heroes-row5").style.display = "none";

    document.getElementById("villain-btn").style.display = "none";
    document.getElementById("hero-btn").style.display = "inline-block";
}