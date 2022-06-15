const edad = 25;
const mayoriaDeEdad = 18;
const edadMinima = 0;
const edadMaxima = 120;

//operadores
//relaciones: >, <, ==, <=, >=, ===, !=, !==
// lógicos: &&(and) ||(or)
// artiméticos: +, -, *, /, %
//if, else
const esEdadValida = edad >= edadMinima && edad <= edadMaxima;
if (esEdadValida) {
    if (edad >= mayoriaDeEdad) {
        console.log("es mayor de edad");
    } else {
        console.log("es menor de edad");
    }
} else {
    console.log("ERROR: edad no válida");
}

// switch
const numero = 100;
switch (numero) {
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    default:
        console.log("número no válido")
}

// operador ternario
// condicion(es) ? valor_verdadero : valor_falso
const resultado = (numero % 2) === 0 ? "es par" : "es impar";
console.log("resultado", resultado);