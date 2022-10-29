const arrayDeStrings= ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

//Antigua forma
console.log(arrayDeStrings[arrayDeStrings.length-1]); //Imprime "ten"   o sea la ultima

//Nueva forma
console.log(arrayDeStrings.at(-1)); //Imprime "ten"   o sea la ultima
console.log(arrayDeStrings.at(0)); //Imprime "one"   o sea la primera