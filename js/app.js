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
// Slipt
// ToUpperCase
// Ejercicio: dada la siguiente cadena de texto "De mayor quisiera ser como tú", reemplazar "De mayor" por "De pequeño" y convertir todo el texto a mayúsculas

const texto = "De mayor quisiera ser como tú y de mayor también quisiera ser como Alex";

const textoModificado = texto.replace("De mayor", "De pequeño").toUpperCase();

/**
 * 
 * @param {String} texto El texto original
 * @param {String} textoBusqueda La cadena de texto a buscar
 * @param {String} textoReemplazo El texto por lo que se reemplaza
 */
function modificarTexto(texto, textoBusqueda, textoReemplazo) {

    //Verificar si el texto de búsqueda está en la cadena

    const index = texto.indexOf(textoBusqueda);

    if (index === -1) {

        return null;
    }

    const textoDivido = texto.split(textoBusqueda);

    const resultado = textoDivido[0] + textoReemplazo + textoDivido[1];

    return resultado;
}

const textoFinal = modificarTexto(texto, "tú", "Alfredo");

// Otra solución alternativa
const textoAsArray = texto.split(" ");

let textoBusqueda = "mayor";
let textoReemplazo = "menor";

// Ejercicio con bucles
const arrayModificado = textoAsArray.map((palabra) => {

    if (palabra.includes(textoBusqueda)) {

        return textoReemplazo;
    }

    return palabra;
});


console.log('textoAsArray :>> ', textoAsArray);
console.log('textoAsArray :>> ', arrayModificado);

