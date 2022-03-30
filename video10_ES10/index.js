//arreglo
let array = [1, 2, 3, [1,2,3,[1,2,3]]]

//flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada. 
console.log(array.flat(4))

//------------
let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value*2]));

let hello = '                  hello world';
console.log(hello);
console.log(hello.trimStart()); //trimStart() permite eliminar los espacios en blanco.

//----------------
let hello1 = 'hello world                   ';
console.log(hello1);
console.log(hello1.trimEnd); //trimEnd() permite eliminar los espacios en blanco.

//---------------------
try{

}catch{
    error
}

//-----------------

let entries = [["name","Oscar"],["age", 32]];
//transformar un arreglo en un objeto
console.log(Object.fromEntries(entries)); 

//---------------------------
let mySimbol = 'My simbol';
let symbol = Symbol(mySimbol);
console.log(symbol.description);