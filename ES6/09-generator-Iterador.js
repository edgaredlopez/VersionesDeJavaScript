//generator es una funcion especial que retorna una serie de valores segun el algoritmo definido
function* funcionIterador(arrayParametro)
{
    console.log("Inicio de la funcion");
    for(let valor of  arrayParametro) 
    {
        console.log(`iterando el valor ${valor}`);
        yield valor; //yield es una palabra reservada que retorna un valor y se detiene la ejecucion de la funcion hasta que se vuelva a llamar a la funcion 
    }
    console.log('fin de la iteracion');
}

const iteradorObjeto= funcionIterador(['Edgar','Luis','Luisa','Luisito']); //se crea un objeto iterador
console.log(iteradorObjeto.next().value); //Aqui se llama a la funcion y se retorna el primer valor. Y se entra a ejecutar todo lo que esta adentro de la funcion hasta que se encuentra con el yield y se detiene la ejecucion de la funcion hasta que se vuelva a llamar a la funcion
console.log(iteradorObjeto.next().value); //Aqui se llama a la funcion y se retorna el segundo valor
console.log(iteradorObjeto.next().value);
console.log(iteradorObjeto.next().value);
console.log(iteradorObjeto.next().value);
console.log(iteradorObjeto.next().value);
console.log(iteradorObjeto.next().value);
