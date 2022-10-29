//Creamos una funcion asincrona e iterador . La asincrona es como crear un HILO y el iterador es como crear un PROCESO
//La funcion iterador guarda su estado y sabe en que yield se quedo y cuando se llama de nuevo a la funcion iterador continua desde donde se quedo
async function* funcionGeneradoraIterador() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const objetoIterador = funcionGeneradoraIterador();
 
//EL then se usa con promesas y el await se usa con funciones asincronas
objetoIterador.next().then((RespuestaRecibida) => console.log(RespuestaRecibida.value));//Aquise llama el primer yield y cuando se resuelve ENTONCCES se ejecuta el codigo que esta dentro del then
objetoIterador.next().then((RespuestaRecibida) => console.log(RespuestaRecibida.value));
objetoIterador.next().then((RespuestaRecibida) => console.log(RespuestaRecibida.value));

console.log("Hola");
 
//=========================================OTRO EJEMPLO========================================================
//crar hilo que espera cada iteraicon de un array que recibe como parametro
async function iteradorDeArrayAsincrono(array) {
    for await (let elemento of array) {
        console.log(elemento);
    }
}
const ejeuctarYGuardarResultadoDe= iteradorDeArrayAsincrono(["Edgar", "Luis", "Juan"]);
console.log("Hola");