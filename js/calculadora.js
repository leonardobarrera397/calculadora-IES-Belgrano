//Tomar los elementos
//Campos de texto, y botones
//Almacenar esos valores en variables
//Condicionar, segun que boton de funcion se clickeo
//Segun la condicion, que cuenta se debe ejecutar
//Deben mostrar el resultado final en el campo de texto
//Principal

const numeros = document.querySelectorAll(".numero");
const funciones = document.querySelectorAll(".funcion");

const campoAuxiliar = document.getElementById("campoAuxiliar");
const campoPrincipal = document.getElementById("campoPrincipal");

let primerNumero = null; 
let operacion = null;

for (const numero of numeros) {
    numero.addEventListener("click", function() {
        campoPrincipal.value += numero.textContent;
    });
}

console.log("Numeros: ", numeros);
console.log("Funciones: ", funciones);