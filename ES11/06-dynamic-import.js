const button=document.getElementById('btn'); //Obtenemos el boton usando su id

//Agregamos un evento al boton para que al hacer click se ejecute la funcion
button.addEventListener("click", async function ()
{
    //Importamos el modulo y lo guardamos en la variable
    const importarModulo=await import('./module.js');
    //Mostramos el modulo en consola
    console.log(importarModulo);
    //Ejecutamos la funcion decirHola()  que esta dentro del modulo importado
    importarModulo.decirHola();
});