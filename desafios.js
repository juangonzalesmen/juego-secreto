function bienvenido() {
    console.log('Hola Mundo!');
}

function bienvenidaConParametro(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function multiplicarNumero(numero) {
    resultado = numero * 2;
    return console.log(resultado);
}

function promedio(valor1,valor2,valor3) {
    resultado = (valor1+valor2+valor3) / 3;
    return console.log(Math.floor(resultado));
}

function numeroMayor(valor1, valor2) {
    // otra forma
    // return a > b ? a : b; 
    return console.log(Math.max(valor1,valor2));
}

function multiplicarPorElMismo(numero) {
    producto = numero * numero;
    return console.log(producto);
}


bienvenido();
bienvenidaConParametro('Juan');
multiplicarNumero(10);
promedio(2,4,4);
numeroMayor(9,8);
multiplicarPorElMismo(5);
