//Este metodo verifica si todo se ha resuelto

const promesa1= new Promise((resolve,reject)=>
{
    reject('Error en la promesa 1');
});

const promesa2= new Promise((resolve,reject)=>
{
    resolve('Promesa 2 resuelta');
});

const promesa3= new Promise((resolve,reject)=>
{
    resolve('Promesa 3 resuelta');
});

//Verfica si ALGUNA de las promesas se ha resuelto y si no se ha resuelto se muestra el error en la consola
//Retorna la primera promesa que se resuelva de forma satisfactoria
Promise.any([promesa1,promesa2,promesa3])
    .then((resultado)=>console.log("La primera promesa que se resolvio es: "+resultado))