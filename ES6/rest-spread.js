//Desestructurar un ARRAY
let frutas= ["aple", "banana", "orange", "kiwi"];

let [fruta1, fruta2, fruta3] = frutas; //Para el nombre del receptor, Puede ser cualquier nombre

console.log(fruta1, fruta2, fruta3);
console.log(frutas[0]);



//Desestructurar un OBJETO
let user= {username: "Edgar", edad: 21, correo: "edgared.dev@gmail.com"};
let {username, edad, correo} = user; //Para el nombre del receptor, tiene que ser el mismo nombre que cada clave del objeto
console.log(username, edad, correo, user.correo);






//Spread Operator
let person= {name: "Edgar", age: 21}; //Objeto
let country=  "Guatemala";  //String

let data= {id: 1, ...person, country}; //Union del objeto person con el string country usando la propagaion
console.log(data);

//REST
function suma(numeroUnico, ...valoresArecibirYDescomponer)
{
    console.log("Valores descompuestos: "+valoresArecibirYDescomponer);
    console.log("Suma de valor unico y valores descompuestos: "+ (numeroUnico + valoresArecibirYDescomponer[0] + valoresArecibirYDescomponer[1]));
}
suma(5, 1,2,3,4);
