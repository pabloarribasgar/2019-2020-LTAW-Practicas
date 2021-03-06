//-- Crear un objeto con varias propiedades
let mi_objeto = {
  nombre: "mi-elemento de prueba",
  x : 10,
  y : 20
}

//-- Acceder a las propiedades del objeto
//-- usando formas equivalentes
console.log("Nombre: " + mi_objeto.nombre)
console.log("Nombre: " + mi_objeto['nombre'])
console.log()

console.log("X: " + mi_objeto.x)
console.log("X: " + mi_objeto['x'])
console.log()

console.log("Y: " + mi_objeto.y)
console.log("Y: " + mi_objeto['y'])

//-- Recorrer todas las propiedades
//-- del objeto
for (prop in mi_objeto) {
  console.log("Propiedad: " + prop + " --> Valor: " + mi_objeto[prop])
}
