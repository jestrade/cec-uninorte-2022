//objetos
const persona1 = {
    primerNombre: "Ana",
    segundoNombre: "María",
    primerApellido: "Pérez",
    segundoApellido: "Leyva",
    sexo: "F",
    edad: 17,
    paisNacimiento: "Colombia"
};
const mayoriaDeEdad = 18;
const escribirNombre = (persona) => {
    const { sexo, edad } = persona;
    if (sexo === "F" && edad >= mayoriaDeEdad) {
        const { primerNombre, segundoNombre } = persona;
        console.log(`${primerNombre} ${segundoNombre}`);
    } else {
        console.log("no cumple las condiciones");
    }
}
escribirNombre(persona1);

// arreglos
const edades = [18, 15, 25, 33];
const [edad1, edad2, edad3] = edades;
console.log(edad1, edad2, edad3);

// funciones
const consultarNombre = () => {
    const nombre = "Jesus";
    const obtenerNombre = () => {
        return nombre;
    }
    return [nombre, obtenerNombre];
}
const [variableNombre, functionObtenerNombre] = consultarNombre();
console.log("variableNombre:", variableNombre);
console.log("functionObtenerNombre:", functionObtenerNombre());


