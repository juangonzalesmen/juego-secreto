function calculoMasaCorporal(estatura, peso) {
    imc = peso / Math.pow(estatura,2)
    decimal1 = imc.toFixed(1)
    return console.log(decimal1);
}

function valorFactorial(valor) {
    let factorial = valor;
    while (valor > 1) {
        valor --;
        console.log(factorial = factorial * valor);
    }
    return console.log(factorial);
}

let valorDolarEnPeru = 3.76;
let solesPeruanos;

function calculoDolares(valorDolar) {
    solesPeruanos = valorDolar * valorDolarEnPeru;
    return console.log(`El dolar esta ${valorDolarEnPeru} por ${valorDolar}, 
    usted recibira ${solesPeruanos} soles`);
}
// =====ayuda creado====
function mostrarEnPantalla(etiqueta,texto) {
    let mostrar = document.querySelector(etiqueta).innerHTML = texto;
}


// desafio 4==============
function areaRectangulo(altura, base) {
    area = base * altura;
    console.log(area)
    // return mostrarEnPantalla('h1',`el area del rectangulo es ${area}`);
}
function perimetroRectangulo(altura, base) {
    perimetro = 2 * altura + 2 * base;
    console.log(perimetro)
    // return mostrarEnPantalla('p', `el perimetro del rectangulo es ${perimetro}`) ;
}

// desafio 5==================
let pi = 3.14
function areaCircular(radio) {
    area = pi * Math.pow(radio,2);
    // return mostrarEnPantalla('h1',`El area del circulo es ${area}`);
}

function perimetroCircular(radio) {
    perimetro = 2 * pi * radio;
    // return mostrarEnPantalla('p',`El perimetro del circulo es ${perimetro}`);
}



function tablaDeMultiplicar(multiplicador) {
    // document.write('<ul>');
    let numeroConsecutivo = 0;
    while (numeroConsecutivo < 10) {
        numeroConsecutivo ++;
        producto = numeroConsecutivo * multiplicador;
        // document.write('<li>');
        console.log(`${multiplicador} x ${numeroConsecutivo} = ${producto}` )
        // document.write('</li>');
    }
    // document.write('</ul>')

    }

valorFactorial(5);
calculoMasaCorporal(1.72,105);
calculoDolares(120);
areaRectangulo(12,18);
perimetroRectangulo(12,18);
areaCircular(2);
perimetroCircular(2);

tablaDeMultiplicar(2);