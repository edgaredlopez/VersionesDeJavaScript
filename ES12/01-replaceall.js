const miStringFrase= "JavaScript es un maravilloso lenguaje de programación. JavaScript";
console.log(miStringFrase);

const nuevoStringReemplazado= miStringFrase.replace("JavaScript", "JAVA"); //Replace solo reemplaza la primera coincidencia
console.log(nuevoStringReemplazado);

const nuevoStringReemplazado2= miStringFrase.replaceAll("JavaScript", "JAVA"); //ReplaceAll reemplaza todas las coincidencias
console.log(nuevoStringReemplazado2);