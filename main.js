
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
             let meter_lista = prompt  ((hig_lista.join('\n')))
             let resultado = lista_higiene.find((elm) => elm.producto.toLocaleLowerCase() == meter_lista)
             if (lista_higiene.some ((elm) => elm.producto == meter_lista)){
             lista.push((resultado))
            }
            else{
                alert ("no tenemos ese producto")
            }
            seguir_comprando = confirm("Desea seguir comprando?")
        }
        }
        else if (categorias == "ropa"){
            let seguir_comprando = confirm("por favor agregue de a un producto ")
            while (seguir_comprando == true){
            let rop_lista = lista_ropa.map( (elm) => elm.producto + " " + "$" + elm.precio );
            let meter_lista = prompt ((rop_lista.join('\n')))
            let resultado = lista_ropa.find((elm) => elm.producto.toLocaleLowerCase() == meter_lista)
             if (lista_ropa.some ((elm) => elm.producto == meter_lista)){
             lista.push((resultado))
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
            let resultado = lista_comida.find((elm) => elm.producto.toLocaleLowerCase() == meter_lista)
             if (lista_comida.some ((elm) => elm.producto == meter_lista)){
             lista.push((resultado))
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

        let product = Number (suma_total())
        let mostrar_total = alert ("total a pagar es " + product)
        let descuento = product - (product*10/100)

        if (product >= 50000){
                alert("su compra supera los 50.000 tiene un 10% de descuento, el valor final del producto queda en " + descuento)
            }


        while ((product > 1) && (product < 50000)){


        let cuotas = Number (prompt("en cuantas cuotas desea pagar"))

            if (cuotas == 3){
                alert ("las cuotas son de " + product/3)
                alert("Gracias por su compra")
                break;
            } else if (cuotas == 6){
                alert ("las cuotas son de " + product/6)
                alert("Gracias por su compra")
                break;
            } else if (cuotas == 9){
                alert("las cuotas son de " + product/9)
                alert("Gracias por su compra")
                break;
            } else if (cuotas == 12){
                alert("las cuotas son de " + product/12)
                alert("Gracias por su compra")
                break;
            } else {
                alert("numero de cuotas no disponible por favor ingresa un multiplo de 3")
            }
        }
        while (product >= 50000){


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
        let lista_final = lista.map((elm) => elm.producto + " " + "$" + elm.precio );
        alert((lista_final.join('\n')))
       
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
    function suma_total(){
                let total_carrito = lista.reduce((acc, elm ) => acc + elm.precio, 0)
                return total_carrito
                }