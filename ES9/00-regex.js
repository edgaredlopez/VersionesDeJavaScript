//Creamos regex
//Los regex son expresiones regulares que nos permiten buscar patrones en cadenas de texto standard o en cadenas de texto de expresiones regulares (regex)  
const regex=/(\d{4})-(\d{2})-(\d{2})/; //Este regex busca un patron de 4 digitos, un guion, 2 digitos, un guion y 2 digitos

const match=regex.exec('2019-01-01'); //Buscamos el patron en la cadena de texto '2019-01-01' 
console.table(match); 
console.log(match[0]); //2019-01-01
console.log(match[1]); //2019