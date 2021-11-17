/* Mi idea de proyecto final será la siguiente: 

Como tengo una página web de un restaurante que realicé en el curso anterior de Desarrollo Web, pienso implementar un carrito de compra. Mi idea es hacerlo en la página de inicio (index.html), en la cual tengo tarjetas de distintas comidas y ya les agregué el boton de "Agregar al carrito" y un logo de un carrito en el navbar.
En el carrito se van a aplicar operaciones de suma para calcular el costo total de productos seleccionados por el usuario.

Posteriormente, voy a intentar implementar lo mismo con la página de postres (me faltaría agregar el boton de agregar al carrito en cada una de las tarjetas).

Si se me ocurre algo mas que pueda hacer con JS lo voy a tratar de implementar :D. Saludos!
 */

// Acá agrego lo solicitado en el desafio :)

const nombre = prompt("Ingrese su nombre:");
const edad = parseInt(prompt("Ingrese su edad:"));
const anioActual = parseInt(prompt("Ingrese el año actual:"));

const anioNacimiento = anioActual - edad;

console.log(typeof edad);

alert(`Hola ${nombre} ! Naciste en el año ${anioNacimiento}`);