//definimos un objeto
const countries = {GT: 'Guatemala', MX: 'Mexico', US: 'United States', CA: 'Canada'};

let ValoresDelObjeto= Object.values(countries); //Pasar SOLO los valores del objeto en un array unidimensional
let LLavesDelObjeto= Object.keys(countries); 

//Imprimir los valores del objeto YA TRANSFORMADOS en un array unidimensional
console.log(ValoresDelObjeto);
console.log(LLavesDelObjeto);