//Para los emojis en Windows uso el shorcut Win + .

// 馃Н Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString); //// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2); //// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 馃敀 Metodos privados
class Message {
   
    #show(val){ // Con el # convertimos al m茅todo en privado
        console.log(val);
    };
    
};

const message = new Message();
message.show('Hola!'); //Error. No podemos acceder fuera de la clase

//  馃懡 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//  馃Υ WeakRef(element);

class AnyClass {
    
    constructor(element){
        this.ref = new WeakRef(element)
    }
   
}

// 馃И Nuevos operadores l贸gicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //Asignaci贸n L贸gica

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1); //Asignaci贸n Or l贸gica

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2); //Asignacion de anulaci贸n l贸gica