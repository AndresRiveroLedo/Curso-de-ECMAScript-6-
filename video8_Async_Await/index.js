
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)//Probamos con false tambien
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

//Primera Forma
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//Segunda Forma
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();