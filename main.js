//Calculador de las cuotas de un producto 
//Una vez que se presiona el boton se inicia la compra, se introduce el precio del producto, si el precio supera 
//los 50000 se le hace un 10% de descuento y si no lo hace se calcula el precio de las cuotas sin descuento 
//ACLARACION: utilize la funcion para poder adjuntarlo al boton en el index y que cuando se presione suceda este proceso
//entiendo que no esta bien utilizada 


function compra (){
   
    let producto = Number (prompt("ingrese el precio del producto"))
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
