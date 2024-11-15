// Animation
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        element.classList.add("show");
    });
});

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
            document.getElementById('bio').textContent = person.data;
            document.getElementById('powers').textContent = person.powers;
            document.getElementById('skills').textContent = person.skills;

            // Crear listas de viñetas para cada tab-content
            populateTabContent('powers', person.powers);
            populateTabContent('skills', person.skills);

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

// Función para agregar contenido en formato de lista en cada tab
function populateTabContent(tabId, items) {
    const tabContent = document.getElementById(tabId);
    tabContent.innerHTML = ''; // Limpiar contenido anterior

    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    tabContent.appendChild(ul);
}

function showTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}