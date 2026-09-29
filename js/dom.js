//Dentro del DOM -> Hay elementos -> Manipulados por js

//Seleccionar la informacion
//Seleccionar los elementos bajo una condicion especifica
const titulo = document.getElementById("titulo");
console.log(titulo);


//Eventos != Funcion
//Evento: Es una porcion o funcion, que se ejecuta
//cuando el usuario lo solicita y esta a la espera
//de que ejecutarse
//EventListener
//Event -> Evento
//Listener -> Oyente / Escucha

const boton = document.getElementById("Boton");
//EventListener solicita dos parametros
//Primero: Cuando se tiene que ejecutar
//Segundo: Que debe ejecutar
boton.addEventListener("click", () => {
    //El titulo cambie
    titulo.textContent = "Clickeando desde javascript";
});
