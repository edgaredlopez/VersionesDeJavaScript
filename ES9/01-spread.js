//objeto de usuario
const user={username:'jose', country:'Mexico', age:30};

const {username,...values}=user;

console.log(username); //jose
console.log(values); //{country: "Mexico", age: 30}




//EJERCICIO DE PLATZI PARA EVALUAR CONOCIMIENTOS
export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    
    return {
      ...json1,
      ...json2,
    };
  }
console.log(solution());