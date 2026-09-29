//Tomar los elementos
//Campos de texto, y botones
//Almacenar esos valores en variables
//Condicionar, segun que boton de funcion se clickeo
//Segun la condicion, que cuenta se debe ejecutar
//Deben mostrar el resultado final en el campo de texto
//Principal

// ---------- Elementos del DOM ----------
const numeros = document.querySelectorAll(".numero");
const funciones = document.querySelectorAll(".funcion");

const campoAuxiliar = document.getElementById("campoAuxiliar");
const campoPrincipal = document.getElementById("campoPrincipal");
const mensajeError = document.getElementById("mensajeError");


let primerNumero = null;
let operacion = null;


const operaciones = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

// ---------- Funciones ----------
const limpiarCampos = () => {
    campoPrincipal.value = "";
    campoAuxiliar.value = "";
    primerNumero = null;
    operacion = null;
};

const ocultarError = () => {
    mensajeError.hidden = true;
};

const mostrarError = (mensaje) => {
    limpiarCampos();
    mensajeError.textContent = mensaje;
    mensajeError.hidden = false;
};

const mostrarResultado = (resultado) => {
    limpiarCampos();
    campoPrincipal.value = parseFloat(resultado.toFixed(10));
};

const elegirOperacion = (simbolo) => {
    if (campoPrincipal.value === "") return;

    primerNumero = parseFloat(campoPrincipal.value);
    operacion = simbolo;
    campoAuxiliar.value = `${primerNumero} ${operacion}`;
    campoPrincipal.value = "";
};

const calcular = () => {
    if (operacion === null) return;           
    if (campoPrincipal.value === "") return;  

    const segundoNumero = parseFloat(campoPrincipal.value);

    if (operacion === "/" && segundoNumero === 0) {
        mostrarError("Error: no se puede dividir por cero.");
        return; 
    }

    const resultado = operaciones[operacion](primerNumero, segundoNumero);
    mostrarResultado(resultado);
};

const agregarDigito = (digito) => {
    if (digito === ".") {
        if (campoPrincipal.value.includes(".")) return;
        if (campoPrincipal.value === "") {
            campoPrincipal.value = "0.";
            return;
        }
    }
    campoPrincipal.value += digito;
};

// ---------- Eventos ----------
for (const numero of numeros) {
    numero.addEventListener("click", () => {
        ocultarError();
        agregarDigito(numero.textContent);
    });
}

for (const funcion of funciones) {
    funcion.addEventListener("click", () => {
        ocultarError();
        if (funcion.id === "igual") {
            calcular();
        } else if (funcion.id === "limpiar") {
            limpiarCampos();
        } else {
            elegirOperacion(funcion.textContent.trim());
        }
    });
}
