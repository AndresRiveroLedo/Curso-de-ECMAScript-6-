//Antes para crear un objeto. ECMAS5
let name = 'Oscar';
let age = 32;

obj = {name : name , age : age};
console.log(obj);

//En ECMAScript 6+
obj2 = {name, age}
console.log(obj2);

/*----------- */
//Funciones
const names = [
    {
        name: 'Andres',
        age : 32
    },
    {
        name : 'Oscar',
        age : 27
    }
]
//Version 1
let listOfNames = names.map(function (item){
    console.log(item.name);
}
)

//version 2: Arrow Function
let listOfNames2 = names.map(item => console.log(item.name));

//version 3: Arrow Fucntion
const listOfNames3 = (name, age, country) => {
    console.log(name, age, country);
} 

//version 3: Arrow Function con un solo parametro
const listfNames4 = name => {
    console.log(name);
}

//version 4: nos retorna un la multiplicacion del numero que le pasamos por parametro
const square = num => num * num;

//Promesas
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Todo ok!');
        }else{
            reject('Ups!! Error')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));