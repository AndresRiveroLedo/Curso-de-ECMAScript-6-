//Para los emojis en Windows uso el shorcut Win + .

// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString); //// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2); //// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
   
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
    
};

const message = new Message();
message.show('Hola!'); //Error. No podemos acceder fuera de la clase

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//  🦴 WeakRef(element);

class AnyClass {
    
    constructor(element){
        this.ref = new WeakRef(element)
    }
   
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //Asignación Lógica

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1); //Asignación Or lógica

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2); //Asignacion de anulación lógica