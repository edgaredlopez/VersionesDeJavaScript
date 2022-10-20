//crear una promesa
const funcionQueRetornaUnaPromesa = () => 
{
    return new Promise((resolve, reject) => 
    {
        if(true)
        {
            //SIMULAMOS la tardanza de la respuesta del proceso que se puede ejecutar. 
            //Puede ser una solicitud a un servidor o una consulta a una base de datos o un proceso que tarda en ejecutarse
            setTimeout(() =>
                resolve("La promesa se resolvio correctamente"), 
            3000);
        }
        else
        {
            //Creamos un error para informar el error que ocurrio
            reject(new Error("Test Error"));
        } 
    });
} 


//ejecutar la  promesa usando una funcion de asincronismo que lo que hace es que espera a que la promesa se resuelva o se rechace en segundo plano y cuando se resuelve o se rechaza se ejecuta el codigo que esta dentro de la funcion de asincronismo 
async function funcionAsincronicaParaEjecutarPromesa() //Funcion asincrona
{
    try
    {
        //Ejecutamos la promesa y le decimos que ESPERE a que se resuelva o se rechace
        const respuestaDeLaPromesa = await funcionQueRetornaUnaPromesa(); 
        //Si la promesa se resuelve se ejecuta el codigo que esta dentro de este bloque
        //en este caso imprimimos el mensaje que se resolvio en la promesa
        console.log(respuestaDeLaPromesa);
    }
    catch(ErrorARecibir)
    {
        console.log(ErrorARecibir.message)
    }
}

//Llamamos la funcion asincrona
funcionAsincronicaParaEjecutarPromesa();









import fetch from 'node-fetch';

//consumir api con fetch
async function FuncionParaFetch()
{
    try
    {
        const URLAPI='https://api.escuelajs.co/api/v1/users';
        const opciones=
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json'
            }
        }
        const respuestaDePeticion = await fetch(URLAPI, opciones);
        const dataParseada = await respuestaDePeticion.json();
       
        console.log(dataParseada);
        console.log(dataParseada[0].email);
        console.log(dataParseada[1].email);
        console.log(dataParseada[2].email); 
    }
    catch(ErrorARecibir)
    {
        console.log("Este es el error de la peticion:  "+ErrorARecibir);
    }
}
FuncionParaFetch();


