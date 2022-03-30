//Primero vamos a trabajar como se hacía antes de ES6
function newFunction(name, age, country){
    var name = name || 'Andres';
    var age = age || '28';
    var country = country || 'BR';
    console.log(name, age, country)
}

newFunction();
newFunction('Roberto', 25, 'EEUU');

//Ahora, con ES6 se realiza así
function newFunction2(name='Oscar', age = 33, country='CO'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Sara', age=26, 'ES');

//Ahora veremos concatenación antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Ahora veremos que los templates se hace más fácil concatenar, es
//necesario ubicar en nuestros teclados las comillas invertidas.
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Nota: tener en cuenta que cuando escribo ${} estoy trayendo el valor de dicha variable, pero esto
//funciona cuando usas comillas invertidas. 

const obj = { name:'Andres', lastName: undefined } 
const { name, lastname = "Perez" } = obj; 
console.log(name, lastname)
// console output -> pepe perez