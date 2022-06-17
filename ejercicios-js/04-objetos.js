const persona1 = {
    primerNombre: "Ana",
    segundoNombre: "María",
    primerApellido: "Pérez",
    segundoApellido: "Leyva",
    sexo: "F",
    edad: 19,
    paisNacimiento: "Colombia",
    direcciones: [
        {
            tipo: "Casa",
            direccion: "Kra 123"
        },
        {
            tipo: "Trabajo",
            direccion: "Calle 987"
        }
    ],
    telefonos: [
        {
            tipo: "Celular",
            indicativo: 57,
            telefono: 3001234567
        },
        {
            tipo: "Fijo",
            indicativo: 57,
            telefono: 6051234567
        }
    ]
};

const persona2 = {
    primerNombre: "Juan",
    segundoNombre: "Gomez",
    primerApellido: "Pérez",
    segundoApellido: "Leyva",
    sexo: "M",
    edad: 19,
    paisNacimiento: "Colombia",
    direcciones: [
        {
            tipo: "Casa",
            direccion: "Kra 123"
        },
        {
            tipo: "Trabajo",
            direccion: "Calle 987"
        }
    ],
    telefonos: [
        {
            tipo: "Celular",
            indicativo: 57,
            telefono: 3001234568
        },
        {
            tipo: "Fijo",
            indicativo: 57,
            telefono: 6051234567
        }
    ]
};

console.log("nombre persona 1", persona1.primerNombre);
const nombreCompletoPersona1 = `${persona1.primerNombre} ${persona1.segundoNombre} ${persona1.primerApellido} ${persona1.segundoApellido}`;
console.log("nombre completo persona 1:", nombreCompletoPersona1);

// acceder a cada atributo del objeto persona 1
for (let key in persona1) {
    console.log(`en el atributo ${key} del objeto persona1 el valor es: ${persona1[key]}`);
}


// Parte 2
const personas = [persona1, persona2];

const numeroPersonas = personas.length;
for (let indice = 0; indice < numeroPersonas; indice++) {
    const nombre = `${personas[indice].primerNombre} ${personas[indice].primerApellido}`;
    console.log(`El nombre de la persona ${indice} es: ${nombre}`);
}

for (let indice = 0; indice < numeroPersonas; indice++) {
    for (let key in personas[indice]) {
        console.log(`en el atributo ${key} de la persona en la posición ${indice} el valor es: ${personas[indice][key]}`);
    }
}

/*
ejercicio:
de un arreglo de 5 personas, 
imprimir el teléfono fijo de las personas con pais de nacimiento Colombia
*/