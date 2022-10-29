const objetoUsuarios= 
{
    edgar: 
    {
        pais: 'Guatemala'
    },
    petrona:
    {
        pais: 'Estados Unidos'
    }
}
console.log(objetoUsuarios.edgar.pais); //Guatemala ///FORMA NORMAL
console.log(objetoUsuarios?.edgar?.pais); //Guatemala ///FORMA OPCIONAL
//El operador de encadenamiento opcional (?.) permite leer el valor de una propiedad ubicada dentro de un objeto anidado sin tener que verificar si cada propiedad en la cadena de acceso existe.