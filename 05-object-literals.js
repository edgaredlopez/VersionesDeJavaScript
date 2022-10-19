//Mejora de OBJETOS LITERALES

function nuevoUsuario(nombre, edad) {
   
    return {
        nombre, //nombre: nombre  //Si el nombre de la propiedad es igual al nombre de la variable, se puede omitir el nombre de la propiedad
        edad,
        pais: "Guatemala" //Si se quiere agregar una propiedad que no se recibe como parametro, se puede agregar directamente
    }
}
console.log(nuevoUsuario("Edgar", 21));