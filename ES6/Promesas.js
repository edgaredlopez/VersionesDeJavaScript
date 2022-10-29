const funcionParaProbarPromesas= () => 
{
    //Retornar una promesa de que algo pasara, ya sea con una respuesta RESUELTA o RECHAZADA
    return new Promise((resolve, reject) => 
    {
        //Si la promesa es resuelta
        if(true)
        {
            resolve('Peticion resuelta con exito');
        }
        //Sil la promesa es RECHAZADA
        else
        {
            reject('Peticion RECHAZADA, no se pudo resolver');
        }
    })
}

//Ejecutar la promesa
funcionParaProbarPromesas()
    .then(response => console.log("Esta es la respuesta exitosa: "+response))//Si la promesa es resuelta, se ejecuta el then y se trae la respuesta de resolve con "response" 
    .catch(error => console.log("Respuesta de error: "+error)); //Si la promesa es fallida, se ejecuta el catch y se trae el error de reject con "error"