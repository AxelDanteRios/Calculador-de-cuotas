
let cliente = new Cliente ()

while (true) {
    let opciones = pedir_num ("Bienvenido \n1. Registrarse \n2. Comprar \n3. Lista \n0. Salir",3)

    if (opciones == 1){
        let nombre = prompt("ingrese su nombre de usuario")
        let logeo_comprador = cliente.compradores.find ((elm)=> elm.nombre == nombre)
        cliente.comprador_actual = Comprador
        if (logeo_comprador == undefined){
            if (confirm("el usuario " + nombre + " no existe, ¿desea registrarse?")){
                cliente.agregar_comprador()
                cliente.comprador_actual = Comprador
            }
        }
    }

if (opciones == 2){

        let categorias = prompt("Que desea comprar?", "Higiene,ropa,comida")
        if (categorias == "higiene"){
             let hig_lista = lista_higiene.map( (lista_higiene) => lista_higiene.producto + " " + "$" + lista_higiene.precio );
             let meter_lista = prompt ((hig_lista.join('\n')))
            lista.push(meter_lista)
        }
        else if (categorias == "ropa"){
            let rop_lista = lista_ropa.map( (lista_ropa) => lista_ropa.producto + " " + "$" + lista_ropa.precio );
            let meter_lista = prompt ((rop_lista.join('\n')))
            lista.push(meter_lista)
        }
        else if (categorias == "comida"){
            let com_lista = lista_comida.map( (lista_comida) => lista_comida.producto + " " + "$" + lista_comida.precio );
            let meter_lista = prompt ((com_lista.join('\n')))
            lista.push(meter_lista)
        }
        else{
            alert ("no tenemos esa categoria")
            break;
        }






        let producto = Number (prompt("ingrese el precio de los productos seleccionados"))
        while (isNaN(producto)){
            producto = Number (prompt("ingrese el precio del producto"))
        }
        if (producto ==" ") {
            confirm ("¿quiere salir de la compra?")
        }
        let descuento = producto - (producto*10/100)
    
        if (producto >= 50000){
                alert("su compra supera los 50.000 tiene un 10% de descuento, el valor final del producto queda en " + descuento)
            }  
    
    
        while ((producto > 1) && (producto < 50000)){
    
            
        let cuotas = Number (prompt("en cuantas cuotas desea pagar"))
    
            if (cuotas == 3){
                alert ("las cuotas son de " + producto/3)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 6){
                alert ("las cuotas son de " + producto/6)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 9){
                alert("las cuotas son de " + producto/9)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 12){
                alert("las cuotas son de " + producto/12)
                alert("Gracias por su compra") 
                break;
            } else {
                alert("numero de cuotas no disponible por favor ingresa un multiplo de 3")
            }
        }
        while (producto >= 50000){
    
            
        let cuotas = Number (prompt("en cuantas cuotas desea pagar"))
            
            if (cuotas == 3){
                alert ("las cuotas son de " + descuento/3)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 6){
                alert ("las cuotas son de " + descuento/6)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 9){
                alert("las cuotas son de " + descuento/9)
                alert("Gracias por su compra") 
                break;
            } else if (cuotas == 12){
                alert("las cuotas son de " + descuento/12)
                alert("Gracias por su compra") 
                break;
            } else {
                alert("numero de cuotas no disponible por favor ingresa un multiplo de 3")
            }
        }
    }

if (opciones == 0) {
     break
}


if (opciones == 3){
       alert (lista.join('\n')) 
       confirm("desea sacar algun producto de la lista?")
       let producto_eliminado = prompt ("ingrese el nombre del producto a eliminar")
    if (lista.includes(producto_eliminado)){
       let numero_producto = (lista.indexOf(producto_eliminado))
       alert(lista.splice(numero_producto , 1) + " ha sido eliminado")
       }
       else{
        alert("este producto no esta en la lista")
       }
    }
} 

    function pedir_num (str,max){
        let num = Number(prompt(str))

        while (! Number.isInteger(num) || isNaN(num) || (num < 0 || num > max)){
            num = Number(prompt(str))
        }
        return num
    }


// function suma(){
//     let precio_total = this.precio + this.precio
// }

























    

    // if (opciones == 2 && juego.jugador_actual !=undefined) {
    //     let jugada_jugador = pedir_num("ingrese \n1. para piedra \n2. para papel \n3. para tijera",3)
    //     let jugada_maquina = rand_juego()

    //     let resultado = juego.analizar_jugada( jugada_jugador, jugada_maquina)

    //     if (resultado == -1) {
    //         alert(juego.jugador_actual + "perdiste, la maquina saco" + juego.opciones [jugada_jugador_maquina])
    //         juego.jugador_actual.perdidas++
    //         juego.jugador_actual.max_score = 0
    //     }else if (resultado == 1){
    //         alert(juego.jugador_actual + "ganaste")
    //         juego.jugador_actual.ganadas++
    //         juego.jugador_actual.max_score ++
    //     }else{
    //         alert(juego.jugador_actual + "empataste")
    //     }
    // }  

    // // Condicional + confirm para sacar al usuario del bucle
    // if (confirm('Desea salir del juego?')) {

    //     break
    // }










