/*Version ES7: includes*/
let numbers = [1, 2, 3, 7, 8];

if(numbers.includes(7)){
    console.log('Si se encuentra el valor 7');
}else{
    console.log('No se encuentra.')
}

let numbers = [1, 2, 3, 7, 8];
const VALUE = 7;

if (numbers.includes(VALUE)) {
  console.log(`Sí se encuentra el valor ${VALUE}`);
} else {
  console.log(`No se encuentra el valor ${VALUE}`);
}

/**
 * Potencia
 */
 let base = 4;
 let exponent = 4;
 let result = base ** exponent;
 console.log(`Result -> ${result}`);