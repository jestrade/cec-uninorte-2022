console.log("hola mundo");

//snake case:  numero_horas_trabajadas
//camel case: numeroHorasTrabajadas -> JS
//pascal case: NUMERO_HORAS_TRABAJADAS
// no usar variables var, solo let o const

// numéricos
let salario = 0;
const valorHora = 42000;
let numeroHorasTrabajadas = 48;
salario = valorHora * numeroHorasTrabajadas;
const salarioTotal = `El salario es: ${valorHora * numeroHorasTrabajadas}`;
console.log("El salario es:", salario);
console.log(salarioTotal);

// cadenas, mantener siempre un mismo estilo
const nombre = "Jesus"; //estilo 1
const primerApellido = 'Estrada'; //estilo 2
const segundoApellido = `De La Hoz`; //solo si deseas interpolar
const nombreCompletoOpcion1 = nombre + " " + primerApellido + " " + segundoApellido;
const nombreCompletoOpcion2 = `${nombre} ${primerApellido} ${segundoApellido}`; //interpolación
console.log("nombreCompletoOpcion1: ", nombreCompletoOpcion1);
console.log("nombreCompletoOpcion2: ", nombreCompletoOpcion2);

// lógico - booleano
const blanco = true;
const negro = false;

console.log("blanco:", blanco);
console.log("negro:", negro);

const SMLV = 10000000;
const excedeSMLV = salario > SMLV;

console.log("excede SMLV:", excedeSMLV);

