//? Variables

// Crea una variable con un scope global

// Preferiblemente nunca usar var
var a = 10;

let precioProducto = 100;

let nombreProducto = "Monitor de 27 pulgadas";

let productoDisponible = true;

//? String o cadenas de texto

let descripcionProducto = `El ${nombreProducto} tiene un precio de ${precioProducto * 1.21}€`;

// Esto no funciona
let descripcionProducto2 = "El ${nombreProducto} tiene un precio de ${precioProducto * 1.21} €";

//? Concatena

if (productoDisponible) {

    descripcionProducto += " y está disponible";
}

//? Métodos de los strings

//Tamaño de una cadena de texto
const longitud = nombreProducto.length;

const index = nombreProducto.indexOf("28");

if (index === -1) {

    console.log("No se encuentra");
}

const estaIncluido = nombreProducto.includes("28");

console.log('estaIncluido :>> ', estaIncluido);

let usuario = " TeDeLimon    ";

// Eliminar espacios en blanco

console.log(usuario);
console.log(usuario.trim());

// Reemplazar texto, cortar texto y convertir a mayúsculas
// Replace
// Slice 
// Join
// ToUpperCase
// Ejercicio: dada la siguiente cadena de texto "De mayor quisiera ser como tú", reemplazar "De mayor" por "De pequeño" y convertir todo el texto a mayúsculas