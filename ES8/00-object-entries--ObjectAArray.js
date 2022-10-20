//Crear un objeto
const countries = {GT: 'Guatemala', MX: 'Mexico', US: 'United States', CA: 'Canada'};
console.log(countries);

//Convertir un objeto en un array Unidiemnsional o Bidimensional
const countriesEnArray = Object.entries(countries);
console.log(countriesEnArray); //muestra el array bidimensional

console.log(countriesEnArray[0][0]); //muestra el primer elemento del array bidimensional
console.log(countriesEnArray[0][1]); //muestra el segundo elemento del array bidimensional