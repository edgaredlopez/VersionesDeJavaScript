//SCOPE DE VARIABLES
var nombre = "Edgar";   //SCOPE GLOBAL A NIVEL FUNCION
let apellido = "Lopez";  //SCOPE DE BLOQUE DE CODIGO
const edad = 25;    //SCOPE DE BLOQUE DE CODIGO

// Arrow Functions
const saludar = () => {
    if (true) {
        console.log(nombre);
        nombre = "Manuel Edgar";
        console.log(apellido);
        apellido = "Lopez Laynez";
        var ciudad = "Guadalajara";
    }
    console.log(ciudad);
}
console.log(nombre, apellido);
saludar();
console.log(nombre, apellido);

/// Strings y Template Strings
let nombre5 = "Edgar";
let apellido5 = "Lopez";
let resultado = `Hola ${nombre5} ${apellido5}
Bienvenido al curso de JavaScript
en el canal de YouTube de Edgar Lopez
`;
console.log(resultado);