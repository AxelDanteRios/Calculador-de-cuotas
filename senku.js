class Cliente {
    constructor() {
        this.compradores = []
        this.comprador_actual
    }

  agregar_comprador() {
       let nombre = prompt("Ingrese nuevamente su nombre")
       while (!confirm ("¿seguro quiere llamarse " + nombre + "?")){
           nombre = prompt("Ingrese su nombre")
           }
           this.compradores.push(new Comprador(nombre))
        
       }    
    }


    
class Higiene {
    constructor(producto, precio ){
        this.producto = producto;
        this.precio = precio;
    }
}
 
let lista_higiene = [
    new Higiene ("jabon", 1000),
    new Higiene ("desodorante", 1500),
    new Higiene ("shampoo", 1800),
    new Higiene ("acondicionador", 2000),
    new Higiene ("pasta dental", 2000),
    new Higiene ("papel higienico",3000)
]

class Ropa {
    constructor(producto, precio ){
        this.producto = producto;
        this.precio = precio;
    }
}

let lista_ropa = [
    new Ropa ("remera", 7000),
    new Ropa ("pantalon", 10500),
    new Ropa ("bermuda", 8000),
    new Ropa ("campera", 15000),
    new Ropa ("gorra", 5000),
    new Ropa ("zapatillas",30000)
]


class Comida {
    constructor(producto, precio ){
        this.producto = producto;
        this.precio = precio;
    }
}


let lista_comida = [
    new Comida ("pancho", 1500),
    new Comida ("hamburguesa", 5000),
    new Comida ("bondiola", 8000),
    new Comida ("vacio", 8500),
    new Comida ("sanguche de milanesa", 7000),
    new Comida ("choripan",2000)
]


let lista = []

function suma_de_lista(){
let suma = 0
for(let i = 0 ; i < lista.length; i++){
    suma += lista.precio[i];
}
alert(suma);
}
     
//     enlistar() {
//         // Primero ordenamos segun el que tenga mayores partidas ganadas
//         // Como ordenariamos un array de objetos 🤔

//         // Armamos la lista de jugadores
//         let lista = ''
//         // Podemos iterar sobre el array y tener un contador a la vez
//         // si a la arrow fn del forEach le pasamos dos param
//         this.jugadores.forEach((jugador, num)=> {
//             lista += num + ' - ' + jugador.nombre + ' - ' + jugador.max_score + ' pts'
//         })


//         // Mostramos la lista de jugadores
//         alert(lista)
//     }
