import {
  Products,
  Semaforo,
  Estudiante,
  FiltradorLibro,
  TablaMultiplicar,
  Email,
  Sms,
  GestorNotis,
  Inventario,
} from "./ejercicios.js";

console.log("-----------------------------------------------");
//--------------- 1. El Sistema de Inventario (Clases + Arrays) ---------------
//Creamos un array con cada producto y cada 'new Products' llama al constructor y crea un objeto único.
const arrayProducts = [
  new Products("Ordenador", 200, 5),
  new Products("Monitor", 150, 10),
  new Products("Ratón", 30, 15),
  new Products("Teclado", 60, 2),
];
//Esta funcion hace de "procesador", no sabe que profuctos hay pero sabe que recibira una lista y hara algo con cada elemento.
function calcular(productsArray) {
  //El forEach recorre el array.
  //'item' representa al objeto actual en cada vuelta del bucle
  productsArray.forEach((item) => {
    //Item es una instancia de 'Products', y tiene acceso a 'productsValue'
    item.productsValue();
  });
}
calcular(arrayProducts);
console.log("-----------------------------------------------");

//--------------- 2. El Semáforo Inteligente (Ciclos + Lógica) ---------------
const semaforo = new Semaforo();
semaforo.mostrarSemaforo();
console.log("-----------------------------------------------");

//--------------- 3. Registro de Asistencia (Clases + Métodos) ---------------
const estudiante = new Estudiante("Marc");
for (let i = 1; i <= 5; i++) {
  //El math.random() > 0.5, lo que hace es que si sale entre 0 a 0.5 de la condicion falsa, por lo tanto falto a clase, si da > 0.5 a 1, la da true y por lo tanto asistió a clase.
  if (Math.random() > 0.5) {
    estudiante.asistencia();
    console.log(`El día ${i}, el alumno ${estudiante.name} asistió a clase`);
  } else {
    console.log(`El día ${i}, el alumno ${estudiante.name} faltó a clase`);
  }
}
//Como asistencias vive dentro del objeto estudiante, necesitas llamar primero a estudiante
console.log(`Total de asistencia de la semana: ${estudiante.asistencias}`);
console.log("-----------------------------------------------");

//--------------- 4. El Buscador de Libros (Funciones + Filtros) ---------------
const libros = [
  { titulo: "El libro 1", autor: "Marc" },
  { titulo: "El libro 2", autor: "Marc" },
  { titulo: "El libro 3", autor: "Juan" },
  { titulo: "El libro 4", autor: "Marc" },
  { titulo: "El libro 5", autor: "Antonio" },
  { titulo: "El libro 6", autor: "Jose" },
];

//Aqui le das el valor de libros al del array que has puesto , y en cambio le das a autor el nombre "Marc", que sera el autor que se buscara
FiltradorLibro(libros, "Marc");
console.log("-----------------------------------------------");

//--------------- 5. Generador de Tablas de Multiplicar (Ciclos Anidados) ---------------
const multiplicar = new TablaMultiplicar(5);
multiplicar.operacion();
console.log("-----------------------------------------------");

//--------------- 1. El Sistema de Notificaciones (SOLID + Clases) ---------------
const email = new Email();
const sms = new Sms();
//Esto es la INVERSIÓN DE DEPENDECIAS: le damos al gester el servicio creado y creamos un gestor que usará el servicio de Email
const gestorEmail = new GestorNotis(email);
const gestorSMS = new GestorNotis(sms);
//Con el gestor que hemos creado, le daremos el mensaje que queremos que se diga y este lo enviara a .enviar que hara su funcion que le hemos dado de la consola.
gestorEmail.enviar("Gracias");
gestorSMS.enviar("Hola");
console.log("-----------------------------------------------");

//--------------- 2. El Validador de Inventario (Ciclos + Condicionales) ---------------
//Se crea un array con el nombre y stock.
const productos = [
    { nombre: "Laptop", stock: 5 },
    { nombre: "Mouse", stock: 10 },
    { nombre: "Teclado", stock: 3 },
    { nombre: "Monitor", stock: 0 },
    { nombre: "Webcam", stock: 0 },
    { nombre: "Auriculares", stock: 10 }
];
//Creamos una constante para capturar si se cumple en toda la array algo, si todos los cumplen devuelve un true.
//Con lo de (p=> p.stock >0), comprobamos si el stock de los productos es mayor que 0 en cada elemento del array.
const todoConStock = productos.every(p => p.stock >0);
//Con el if lo que hacemos es que si se ha cumplido el .every que hemos hecho y por lo tanto todoConStock es true, ejecutamos el console.log
if(todoConStock){
    console.log("Todos los productos del inventario tienen stock");
    //Si no todos los prodcutos tienen stock, creamos la constante agotados y le das el valor que tiene el "Inventario(productos)", que en este caso como antes hemos hecho el return, tendra el valor de "productosNoStock".
} else {
    
      const agotados = Inventario(productos);
      console.log("Productos agotados:", agotados)
  }
//Enviamos en consola los valores guardados en agotados, es decir la array que hemos creado a partir de los productos con 0 stock.
