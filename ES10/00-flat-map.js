//FLAT
//Crear una matriz
let matriz = [1,2,3,4,5,[6,7,8,9,10, [11,12,13,14,15]]];
console.log(matriz[5][2]);
console.log(matriz.flat(3));//Aqui se llama a la funcion flat, y se le pasa como parametro el nivel de profundidad que se desea aplanar. Una matriz de varias dimenciones se convierte en una matriz de una dimencion



//========================================================================================================
//FLAT MAP
//Crear una matriz
let matriz2 = [1,2,3,4,5];
console.log(matriz2.flatMap(value =>[value, value*2]));//FlatMap recibe una funcion como parametro, y esta funcion recibe un valor, y retorna un array con el valor y el valor multiplicado por 2

