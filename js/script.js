

//Seleccionar elementos
// A. Por ID (El más directo para arrancar)
const titulo = document.getElementById('titulo-principal');

// B. Por selector CSS (El más flexible)
const boton = document.querySelector('.btn-guardar');      // Selecciona el primero
const items = document.querySelectorAll('.item-lista');   // Selecciona todos (Array-like)


//Moficar contenido y estilos
const mensaje = document.getElementById('mensaje');

// Cambiar texto
mensaje.textContent = "¡Hola desde JavaScript!";

// Cambiar estilos CSS directamente
mensaje.style.color = "red";
mensaje.style.fontSize = "20px";

// Agregar o quitar clases CSS (Práctica recomendada en la industria)
mensaje.classList.add('activo');
mensaje.classList.remove('oculto');

//Eventos
const boton = document.getElementById('mi-boton');

boton.addEventListener('click', () => {
  alert("¡Hiciste click en el botón!");
});

//Agregar y crear elementos nuevos
// 1. Capturar el contenedor padre
const lista = document.getElementById('lista-alumnos');

// 2. Crear una nueva etiqueta en memoria
const nuevoLi = document.createElement('li');

// 3. Asignarle contenido
nuevoLi.textContent = "Lucas Paz";

// 4. Inyectarlo dentro del HTML
lista.appendChild(nuevoLi);