// object
const nombres = ["jesus", "ana", "maria", "pepe"];
const arregloDeTipos = [1, true, 2, "jesus", false, ["estrada"]];

console.log("nombres", nombres);
console.log("primer nombre agregado:", nombres[0]);
console.log("último nombre agregado:", nombres[3]);
console.log("arregloDeTipos", arregloDeTipos);
console.log("tamaño arregloDeTipos", arregloDeTipos.length);
console.log("última posición arregloDeTipos", arregloDeTipos[arregloDeTipos.length - 1]);

// ciclos: while + for

let indice = 0;
const tamanoArreglo = nombres.length;
while (indice < tamanoArreglo) {
    console.log(`elemento en la posición ${indice} es ${nombres[indice]}`);
    indice++; // indice = indice + 1;
}
console.log("fin");

//for (inicializar el índice; condición de salida; incremento)
for (let indice = 0; indice < tamanoArreglo; indice++) {
    console.log(`elemento en la posición ${indice} es ${nombres[indice]}`);
}