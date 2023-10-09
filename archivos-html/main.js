const fila = document.querySelector('.contenedor-carrusel')
const peliculas = document.querySelector('.pelicula')

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const fila2 = document.querySelector('.contenedor-carrusel2')
const peliculas2 = document.querySelector('.pelicula')

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

/* -------- ------- ------ felcha derecha -------- ------- ------ */
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
});
/* -------- ------- ------ felcha izquierda -------- ------- ------ */
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});

/* -------- ------- ------ felcha derecha -------- ------- ------ */
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;
});
/* -------- ------- ------ felcha izquierda -------- ------- ------ */
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;
});