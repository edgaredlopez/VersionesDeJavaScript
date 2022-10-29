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

//Verifica si todas las promesas se han resuelto y si no se ha resuelto se muestra el error en la consola
Promise.allSettled([promesa1,promesa2,promesa3])
    .then((resultado)=>console.log(resultado));
