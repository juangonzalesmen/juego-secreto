// ejercicio 1 =======================
/*
Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];
console.log(listaGenerica);
// ejercicio 2 y 3 =======================
/*
Crea una lista de lenguajes de programación 
llamada "lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
ejercicio 3 ==========
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
*/
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","python"]
lenguajesDeProgramacion.push("java","ruby","GoLang");
// ejercicio 4 =======================
/*
Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.
*/
function mostrarConsola() {
    console.log(lenguajesDeProgramacion);
}
// ejercicio 5 =======================
/*
Crea una función que muestre en la consola todos los elementos
de la lista "lenguagesDeProgramacion en orden inverso.
*/
function ordenInverso() {
    console.log(lenguajesDeProgramacion.reverse());
}
// ejercicio 6 =======================
/*
Crea una función que calcule el promedio de los elementos
en una lista de números.
*/
let listaDeNumeros = [2,6,5,4,3];
function promedioListaNumero() {
    let valorInicial = 0;
    let numerosSumados = listaDeNumeros.reduce((acumulador,valorActual) => 
    acumulador + valorActual,valorInicial,);
    promedio = numerosSumados / listaDeNumeros.length;
    console.log(`suma de numeros de la lista ${numerosSumados}`);
    console.log(`cantidad de numeros en la lista ${listaDeNumeros.length}`);
    return console.log(`promedio de numeros de la lista ${promedio}`);
}
// ejercicio 7 =======================
/*
Crea una función que muestre en la consola 
el número más grande y el número más pequeño en una lista.
*/
function numeroMayorYMenor() {
    let numeroMayor = Math.max(...listaDeNumeros);
    let numeroPequeno = Math.min(...listaDeNumeros);
    /*
    Al anteponer los tres puntos que representan al spread operator 
    transformamos la variable numeros (que en el ejemplo representa 
    un array con números) en una lista de argumentos, y es por ello 
    que podemos acceder al número mayor del array numeros. 
    Es como si le quitáramos los corchetes ( “[]” ) al array.
    */
    return console.log(numeroMayor,numeroPequeno);;
       
    }
// ejercicio 8 =======================
/*
Crea una función que devuelva la suma de todos los elementos en una lista.
*/
function sumaDeLista() {
    // una forma=======
    // let valorInicial = 0;
    // let numerosSumados = listaDeNumeros.reduce((acumulador,valorActual) => 
    // acumulador + valorActual,valorInicial,);
    // otra forma=======
    let numerosSumados = listaDeNumeros.reduce((a,b) => a + b,0);
    return console.log(numerosSumados);
}
// ejercicio 9 =======================
/*
Crea una función que devuelva la posición en la lista donde se
encuentra un elemento
pasado como parámetro, o -1 si no existe en la lista.
*/
function posicionEnLaLista(numero) {
    return console.log(`la posicion de ${numero} es ` + listaDeNumeros.indexOf(numero));
}
// ejercicio 10 =======================
/*
Crea una función que reciba dos listas de números del mismo tamaño y
devuelva una nueva lista con la suma de los elementos uno a uno.
*/
let listaNumero1 = [4,3,5];
let listaNumero2 = [7,6,5];
let listaNumero3 = [];
function sumaDeListas() {
    suma1 = listaNumero1.reduce((a,b)=> a + b,0);
    suma2 = listaNumero2.reduce((a,b)=> a + b,0);
    listaNumero3.push(suma1,suma2);
    return console.log(listaNumero3); 
}
// ejercicio 11 =======================
/*
Crea una función que reciba una lista de números y
devuelva una nueva lista con el cuadrado de cada número.
*/
function funcionALCuadrado() {
    let listNumber = [2,5,8]
    listaALCuadrado = listNumber.map((numero)=>Math.pow(numero,2));
    return console.log(listaALCuadrado);
}


mostrarConsola();
ordenInverso();
promedioListaNumero();
numeroMayorYMenor();
sumaDeLista();
posicionEnLaLista(2);
sumaDeListas();
funcionALCuadrado();