// 1. Seleccionar
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('contenedor-lista');

// 2. Escuchar evento Click
boton.addEventListener('click', () => {
  // 3. Crear elemento
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = "Nuevo Alumno Acreditado";

  // 4. Inyectar en el DOM
  lista.appendChild(nuevoItem);
});