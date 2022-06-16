// ES5
function saludar() {
    console.log("hola!");
}
saludar(); //primera ejecución

function saludarConNombre(nombre) {
    console.log(`hola ${nombre}!`);
}
saludarConNombre("Jesus"); //segunda ejecución

const variableSaludar = saludar;
variableSaludar(); // tercera ejecución

function imcES5(peso, altura) {
    return peso / (altura * altura);
}
const calculoIMCES5 = imcES5(80, 1.80);
console.log("el calculo IMC en ES5 es:", calculoIMCES5);

//IIFE
(function () {
    console.log("saludos desde el CEC");
})(); //cuarta ejecución

// ES6
// Arow functions, funciones sin nombre
const saludarArrowFunction = () => {
    console.log("saludar desde Arrow Function");
}
saludarArrowFunction();

const division = (dividendo, divisor) => {
    if (divisor === 0) {
        console.log("error");
    } else {
        console.log(`el resultado es: ${dividendo / divisor}`);
    }
};
division(5, 0);
division(5, 1);
division(10, 5);

const imc = (peso, altura) => {
    return peso / (altura * altura);
}

const calculoIMC = imc(80, 1.80);
console.log(calculoIMC);

const imcV2 = (peso, altura) => peso / (altura * altura);
const calculoIMCV2 = imcV2(80, 1.80);
console.log(calculoIMCV2);

const saludarConNombreV2 = nombre => `hola ${nombre}!`;
const saludo = saludarConNombreV2("Jesus");
console.log(saludo);

// ejercicio: crear una arrow function IIFE