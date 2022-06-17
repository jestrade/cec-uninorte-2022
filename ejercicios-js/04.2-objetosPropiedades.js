const persona1 = {
    primerNombre: "Ana",
    segundoNombre: "María",
    primerApellido: "Pérez",
    segundoApellido: "Leyva",
    sexo: "F",
    edad: 19,
    paisNacimiento: "Colombia"
};
console.log("*******************************************************************************************");
for (let key in persona1) {
    console.log(`en el atributo ${key} del objeto persona1 el valor es: ${persona1[key]}`);
}
delete persona1.sexo;
delete persona1.edad;
delete persona1.paisNacimiento;
console.log("*******************************************************************************************");
for (let key in persona1) {
    console.log(`en el atributo ${key} del objeto persona1 el valor es: ${persona1[key]}`);
}
persona1.primerNombre = "Juana";
persona1.nickname = "amria";
console.log("*******************************************************************************************");
for (let key in persona1) {
    console.log(`en el atributo ${key} del objeto persona1 el valor es: ${persona1[key]}`);
}