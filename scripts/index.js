// Animation
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        element.classList.add("show");
    });
});

function filterCards() {
    // Obtener el valor ingresado en el input
    let input = document.getElementById('input-box');
    let filter = input.value.toUpperCase(); // Convertir a mayúsculas para comparación sin distinción entre mayúsculas y minúsculas

    // Obtener todos los contenedores con la clase container1 y container2
    let containers = document.querySelectorAll('.container1, .container2');

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