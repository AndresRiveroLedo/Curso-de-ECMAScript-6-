//Video 3. Hablemos de Let y Const, Spread 0 y desesctructuracion

//Antes de ES6 pasaba esto
let elsa = "elsa ejemplo ssssssssssssssssssssssssssssssss \n"
            + "abasklmnksnknnrfgnmngkldfklklfgnklfnklnfg.";

//esto funcionaba, sin embargo, no es una opcion muy óptima que digamos

//Ahora usamos ES6: comillas francesas
let elsa2 = `Elsa2 Ejemplo: ssssssssssssssssssssssssssssssss
abasklmnksnknnrfgnmngkldfklklfgnklfnklnfg.`;


console.log(elsa);
console.log(elsa2);

//Nota 1: Note que si bien el uso (;) no es necesario, en este caso, lo usamos porque hace parte de las buenas prácticas de programacion para que los demás vean el código lo más legible posible.

//Ahora crearemos un objeto  
let person = {
    'name' : 'Jeff',
    'age' : 24,
    'country' : 'ES'
}

//Del curso de fundamentos de JS, sabemos usar la notacion person.name,
//llamaremos al atributo correspondiente a la key name del objeto person.
console.log(person.name, person.age);

/*Ahora desestructuraremos nuestro objeto */
let {name, age, country} = person;

/*Con la anterior linea lo que hicimos fue desestructurar nuestro objeto, esta notación es usper util porque podemos elegir cuales keys necesitamos del mismo objeto y ya puedo proceder a desplegarlas en la consola sin necesidad de utilizar (objeto.key) */

console.log( name, age, country);

//Ahora vamos a trabajar con array
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

/*Ahora, queremos un array que contenga a team1 y team2. Pero además de esto, usaremos el (...), esto nos permite traer un array completo */
let education = ['David', ...team1, team2];

console.log(education);


/*Orginalmente se usaba (var) para asignar variables
Podemos ver que usamos mucho (let), pero ¿por qué? Bueno (let) se
usa para el scope, es decir, se define para el bloqueu de código en el cual se va a usar.*/

{
    var global = "Global var";
}

{
    let globalLet = "Global Let"
    console.log(globalLet);
}
console.log(global);
console.log(globalLet);

/*¿Por qué no usar VAR? 
Es un lenguaje debilmente tipado, es decir, cuando definimos una varibale con (var), podemos cambiar su valor en el transcurso del código y con esto podríamos ocasionar distintos bugs y errores en nuestro programa. Por dicho motivo es mejor usar Let y const */

/*A diferencia de (let), const no se puede modificar como si lo hacia VAR.*/
const a = 'b';
a = 'c';
console.log(a);