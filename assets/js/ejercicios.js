//--------------- 1. El Sistema de Inventario (Clases + Arrays) ---------------
export class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  productsValue() {
    console.log(
      `El valor total del ${this.name} es ${this.price * this.stock}`,
    );
  }
}

//--------------- 2. El Semáforo Inteligente (Ciclos + Lógica) ---------------
export class Semaforo {
  lucesSemaforo = ["Verde", "Amarillo", "Rojo"];
  // Queremos 3 vueltas completas, por eso multiplicamos 3 por la longitud del array (3).
  // Resultado: 9. El bucle se ejecutará para i = 0 hasta i = 8.
  recorerSemaforo = 3 * this.lucesSemaforo.length;
  mostrarSemaforo() {
    for (let i = 0; i < this.recorerSemaforo; i++) {
      /* EL TRUCO DEL ÍNDICE CIRCULAR (%):
               El operador % (módulo) nos da el RESTO de dividir 'i' entre 3.
               - Si i=0: 0 / 3 = 0 (resto 0)
               - Si i=1: 1 / 3 = 0 (resto 1)
               - Si i=2: 2 / 3 = 0 (resto 2)
               - Si i=3: 3 / 3 = 1 (resto 0) -> ¡MAGIA! Volvemos al índice 0 (Verde)
               Esto garantiza que NUNCA intentemos acceder a un índice que no existe.
               POr eso ahora en el console.log en vez de cojer el indice i cojemos el indiceCircular
            */
      const indiceCircular = i % this.lucesSemaforo.length;
      console.log(this.lucesSemaforo[indiceCircular]);
    }
  }
}

//--------------- 3. Registro de Asistencia (Clases + Métodos) ---------------
export class Estudiante {
  asistencias = 0;
  constructor(name) {
    this.name = name;
  }
  asistencia() {
    //Busca la propiedad "asistencias", y le suma 1 a este objeto
    this.asistencias++;
  }
}

//--------------- 4. El Buscador de Libros (Funciones + Filtros) ---------------
export function FiltradorLibro(libros, autorBuscado) {
  //Creamos una variable para contar el numero de libros encotramos del autor en especifico
  let encontrados = 0;
  //Recorremos el array de libros
  for (let i = 0; i < libros.length; i++) {
    //Mientras se recorre el array, se comprueba con el if si en cada espacio del array el autor es igual a "Marc", que le hemos dado asi el valor a autorBuscado
    if (libros[i].autor === autorBuscado) {
      //Aqui si encuentra el autor, le suma 1 a la variable encontrados
      encontrados++;
    }
  }
  //Creamos otro condicion, que es si el valor de la constante encontrados = 0, pues entonces decimos que no hemos encotrado ningun libro del autor que se buscaba dentro del array
  if (encontrados === 0) {
    console.log(`No se encontraron libros del autor ${autorBuscado}`);
    //Si se encuentran, dices que se han encontrado el núm de libros del autor buscado
  } else {
    console.log(
      `Se encontraron ${encontrados} libros del autor ${autorBuscado}`,
    );
    //Creamos otro bucle, ya que aparte de saber cuantos libros se han encontrado, queremos saber los nombres de los libros.
    //El bucle lo que hace es que mientras la constante i es < a la longitud de la array se recorre el array
    for (let i = 0; i < libros.length; i++) {
      //Creamos una condicion dentro del bucle, la cual busca si la array en cada posicion del array coincide con el que buscamos, si es asi, se manda un console.log con el nombre del libro ,con la array en su posicion.titulo, ya que tenemos un json y queremos que solo salga el titulo del libro
      if (libros[i].autor === autorBuscado) {
        console.log(`- ${libros[i].titulo}`);
      }
    }
  }
}

//--------------- 5. Generador de Tablas de Multiplicar (Ciclos Anidados) ---------------
export class TablaMultiplicar {
  constructor(num) {
    this.num = num;
  }
  operacion() {
    for (let i = 1; i <= 10; i++) {
      console.log(`${this.num} * ${i} = ${this.num * i}`);
    }
  }
}

//--------------- 1. El Sistema de Notificaciones (SOLID + Clases) ---------------
export class Email {
  //Aquí se recibe un mensaje y lo envia a email
  enviar(mensaje) {
    console.log(`Enviar: "${mensaje}" a través de Email`);
  }
}
export class Sms {
  enviar(mensaje) {
    console.log(`Enviar: "${mensaje}" a través de Sms`);
  }
}
//Esta clase solo usa lo que se envia de Email, Sms...
export class GestorNotis {
  //El constructor recibe un servicio que puede ser de Email o Sms
  constructor(servicio) {
    this.servicio = servicio;
  }
  enviar(mensaje) {
    //Llama al método enviar, ya sea Email.enviar, o Sms.enviar con su mensaje, depende de lo que pongas.
    this.servicio.enviar(mensaje);
  }
}

//--------------- 2. El Validador de Inventario (Ciclos + Condicionales) ---------------
export function Inventario(productos) {
    //Creamos un array vacio para poner dentro todos los productos con un stock = 0
  let productosNoStock = [];
  //Creamos un bucle for of, que recorre el array productos. LO que hace el for... of, es "Para cada elemento dentro de 'productos' llamalo 'producto' y haz lo siguiente:"
  for (const producto of productos) {
    //Creamos una condicion dentro del bucle que hace que mire dentro de la array si el stock = 0, si es asi, hace un .push y envia el nombre del producto que tiene 0 stock en el array que hemos creado vacio.
    if (producto.stock === 0) {
      productosNoStock.push(producto.nombre);
    }
  }
  const todoConStock = productos.every(p => p.stock >0);
  if(todoConStock){
    console.log("Todos los productos del inventario tienen stock");
  } else {
    
  }
  //El return devuele el array con los nombres en el sitio donde fue llamada, en este caso en el Inventario(productos), que guardara el valor de 'productosNoStock'
  return productosNoStock;
}
