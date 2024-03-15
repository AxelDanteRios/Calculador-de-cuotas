
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

        let categorias = prompt("Que desea comprar?", "Higiene,ropa,comida").toLocaleLowerCase()
        if (categorias == "higiene"){
            let seguir_comprando = confirm("por favor agregue de a un producto ")
            while (seguir_comprando == true){
             let hig_lista = lista_higiene.map((elm) => elm.producto + " " + "$" + elm.precio );
             let meter_lista = ( prompt ((hig_lista.join('\n'))))
             if (lista_higiene.some ((elm) => elm.producto.toLocaleLowerCase() == meter_lista)){
            lista.push(meter_lista)
            }
            else{
                alert ("no tenemos ese")
            }
            seguir_comprando = confirm("Desea seguir comprando?")
        }
        }
        else if (categorias == "ropa"){
            let seguir_comprando = confirm("por favor agregue de a un producto ")
            while (seguir_comprando == true){
            let rop_lista = lista_ropa.map( (elm) => elm.producto + " " + "$" + elm.precio );
            let meter_lista = prompt ((rop_lista.join('\n')))
            if (lista_ropa.some ((elm) => elm.producto == meter_lista)){
                lista.push(meter_lista)
                }
                else{
                    alert ("no tenemos ese")
                }
                seguir_comprando = confirm("Desea seguir comprando?")
            }
        }
        else if (categorias == "comida"){
            let seguir_comprando = confirm("por favor agregue de a un producto ")
            while (seguir_comprando == true){
            let com_lista = lista_comida.map( (elm) => elm.producto + " " + "$" + elm.precio );
            let meter_lista = prompt ((com_lista.join('\n')))
            if (lista_comida.some ((elm) => elm.producto == meter_lista)){
                lista.push(meter_lista)
                }
                else{
                    alert ("no tenemos ese")
                }
                seguir_comprando = confirm("Desea seguir comprando?")
            }
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
