const nombres = ["jesus", "ana", "maria", "pepe"];
console.log("*******************************************************");
nombres.forEach((nombre) => {
    console.log("el nombre es:", nombre);
});

nombres.push("david"); // agregar elementos
console.log("*******************************************************");
nombres.forEach((nombre) => {
    console.log("el nombre es:", nombre);
});

console.log("*******************************************************");
const numeros = [2, 4, 6, 8, 9];
console.log("numeros", numeros);
const cuadradoNumeros = numeros.map(numero => numero * numero);
console.log("cuadradoNumeros", cuadradoNumeros);

console.log("*******************************************************");
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("animals", animals);
const newAnimals = animals.slice(2);
console.log("newAnimals", newAnimals);
console.log("*******************************************************");
console.log("animals.splice(0)", animals.splice(0, 1));
console.log("animals", animals);
console.log("*******************************************************");
const edades = [3, 70, 21, 2, 80, 90, 33, 44, 32, 33];
const mayoriaDeEdad = 18;
console.log("edades", edades);
const edadesFiltradas = edades.filter(edad => edad < mayoriaDeEdad);
console.log("edadesFiltradas", edadesFiltradas);

const personas = [
    {
        id: 1,
        edad: 20,
        lugarNacimiento: "Colombia"
    },
    {
        id: 2,
        edad: 22,
        lugarNacimiento: "Costa Rica"
    },
    {
        id: 3,
        edad: 90,
        lugarNacimiento: "Colombia"
    }
];
const colombianosMayoresDeEdad = personas.filter(({ edad, lugarNacimiento }) => edad > mayoriaDeEdad && lugarNacimiento === "Colombia");
console.log("colombianosMayoresDeEdad", colombianosMayoresDeEdad);

console.log("*******************************************************");
const nombresV2 = ["jesus", "david", "estrada"];
console.log(nombresV2.join(","));
console.log("*******************************************************");
const numerosV2 = [9, 8, 3, 4, 2, 1, 2, 5, 5, 9];
numerosV2.sort()
console.log(numerosV2);
nombres.sort()
console.log(nombres);
