
//MatchAll sirve para buscar todas las COINCIDENCIAS de una expresión regular en una cadena de texto y devuelve un iterador con los resultados. La respuesta contiene las dos coincidencias, el indice donde se encuentra y el input original
//Por ejemplo validar que una contrasena tenga al menos una letra mayuscula, una minuscula, un numero y un caracter especialz

const regexParaValidar = /\b(Apple)\b/g;
const cadenaDeFrutas= 'Apple, Banana, Kiwi, Apple, orange, etc, etc, etc, Apple';
for(const Coincidencia of cadenaDeFrutas.matchAll(regexParaValidar))
{ 
    console.log(Coincidencia);
}