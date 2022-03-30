const obj ={
    name: 'jeff',
    age: 24,
    country: 'CO',
};

let {name, ...all} = obj;

//Aquí desestructuramos el objeto, sacamos el key que nos interesaba que en este caso es age, y para no escribir el resto usamos (...all)
console.log(name, ...all);
console.log(all);

//(...) es conocido como el operador de propagación, con este, podemos traer todas las keys con sus respectivos values de objeto, como veremos a continuación.
const obj1 = {
    ...obj,
    height: 1.81,
}
//como podemos ver obj1, tiene todos los keys del obj y además agregamos un nuevo key que sería height. 
console.log(obj1);

//Async/Await
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    });
}

//Promesas
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


    /*
¿Cómo mejoró el manejo de  Regex?
Esto es super util para trabajar con fechas
como sabemos, las fechas tienen: año, mes, dia
[0-9] indica el rango de numero
{4} nos indica que se necesitan maximo 4 numeros
*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);