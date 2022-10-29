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
    .then(RespuestaRecibida => console.log("Esta es la respuesta exitosa: "+RespuestaRecibida))//Si la promesa es resuelta, se ejecuta el then y se trae la respuesta de resolve con "response" 
    .catch(ErrorRecibido => console.log("Respuesta de Error: "+ErrorRecibido)) //Si la promesa es fallida, se ejecuta el catch y se trae el error de reject con "error"
    .finally(() => console.log("Se termino la ejecucion de la promesa (Siempre me ejecuto)")); //Se ejecuta siempre, ya sea si la promesa es resuelta o rechazada

