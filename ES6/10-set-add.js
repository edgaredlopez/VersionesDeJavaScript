const lista= new Set(); // Set es un objeto iterable que permite almacenar valores UNICOS o sea que no se pueden repetir de cualquier tipo, incluso valores primitivos u objetos referenciados 

//Agregando valores al set 
lista.add('Edgar');
lista.add('Luis').add('Luisa').add('Luisito');

//MOSTRANDO LOS VALORES DEL SET
console.log(lista);

//Verificando si un valor existe en el set
console.log(lista.has('Edgar'));

//Eliminando un valor del set
lista.delete('Luisito');

//Volviendo a mostrar los valores del set Despues de eliminar un valor
console.log(lista);

//Mostrar el tamaño del set
console.log(`El tamaño del set es: ${lista.size}`);