 const entries = new Map([[ 'foo' , 1 ], [ 'bar' , 2 ]]); //Aqui se crea un objeto Map con dos entradas
 const obj = Object.fromEntries(entries); //Aqui se crea un objeto a partir de las entradas del objeto Map
  console.log(obj); // { foo: 1, bar: 2 } 