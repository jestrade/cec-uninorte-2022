// console.log(process); //objeto con información del entorno de ejecución
// console.log(process.argv); // arreglo con información de los argumentos de ejecución

const bmi = (peso = -1, altura = -1) => altura === "0" ? -1 : peso / (altura * altura);

const peso = process.argv[2];
const altura = process.argv[3];

const resultado = bmi(peso, altura);
console.log(`El BMI es ${resultado}`);
