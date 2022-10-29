//Crear una clase
class  user
{
    //Propiedades de la clase----------------------------
    nombre = "Edgar";  //En las clases, las variables se declaran sin "this" y sin "var" o "let"
    //Constructor-------------------------------------
    constructor (nombreParametro)
    {
        console.log(this.nombre);
        this.nombre = nombreParametro; //Se usa "this" para referirse a las propiedades de la clase
        console.log(this.nombre);
    }
    //Metodos----------------------------------
    saludar () //Los metodos se declaran sin "function"
    {
        return `Hola, soy ${this.nombre}`;
    }

    //Metodo privado------------------------------------------
    //Solo se puede acceder a este metodo desde dentro de la clase
    #metodoPrivado()
    {
        console.log("Hola, soy un metodo privado");
    }

    //Metodo estatico------------------------------------------
    static metodoEstatico()
    {
        console.log("Hola, soy un metodo estatico");
    }

    //getters y setters----------------------------------------------
    get getNombre()
    {
        return this.nombre;
    }
    set setNombre(nombreParametro)
    {
        this.nombre = nombreParametro;
    }
};


//Crear un objeto de la clase----------------------------------------------------
const userObjeto = new user("Natalia"); //Se crea un objeto de la clase "user" y se le pasa el parametro "Natalia" al constructor
console.log(userObjeto.saludar());

//Acceder a un metodo estatico-----------------------------------
user.metodoEstatico();

//Acceder a un set ter------------------------------------------------
userObjeto.setNombre = "Petrona";
//Acceder a un getter--------------------------------------------
console.log(userObjeto.getNombre);
