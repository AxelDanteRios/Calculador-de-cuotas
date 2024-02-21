//Calculador de las cuotas de un producto 

function compra (){
let producto = Number (prompt("ingrese el precio del producto"))
while (producto>1){

let cuotas = Number (prompt("en cuantas cuotas desea pagar"))

    if (cuotas == 3){
        alert ("las cuotas son de " + producto/3)
        break;
    } else if (cuotas == 6){
        alert ("las cuotas son de " + producto/6)
        break;
    } else if (cuotas == 9){
        alert("las cuotas son de " + producto/9)
        break;
    } else if (cuotas == 12){
        alert("las cuotas son de " + producto/12)
        break;
    } else {
        alert("numero de cuotas no disponible por favor ingresa un multiplo de 3")
    }
}
alert("Gracias por su compra")
}