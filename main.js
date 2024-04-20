let play = new Juego ()

let btn_usuario = document.querySelector(".btn");
let user = document.querySelector("label");
let formulario = document.querySelector(".form");
let dado_uno = document.querySelector(".uno");
let dado_dos = document.querySelector(".dos");
let dado_tres = document.querySelector(".tres");
let dado_cuatro = document.querySelector(".cuatro");
let dado_cinco = document.querySelector(".cinco");
let btn_tirar = document.querySelector(".tirar");
let btn_turno = document.querySelector(".terminar_turno");
let j_uno = document.querySelector(".jugador_uno");
let j_dos = document.querySelector(".jugador_dos");
let tabla_uno = document.querySelector(".tabla_j_uno");
let tabla_dos = document.querySelector(".tabla_j_dos");
let rondas = document.querySelector(".ronda");
const max_rondas = 3;
let contador_ronda = 0;
let cont_usuario = 0
btn_turno.style.display = "none"
agregar_jugador()

// aca arranca el juego cuando ingresas dos nombres 
btn_usuario.addEventListener('click',()=>{

    cont_usuario ++
    if (cont_usuario == 2){
        formulario.style.display = "none"
        btn_turno.style.display = "block"
    }
  
btn_tirar.addEventListener('click',sumar_ronda)
btn_tirar.addEventListener('click',()=>{

    let num_dado_uno = rand_dado()
    let num_dado_dos = rand_dado()
    let num_dado_tres = rand_dado()
    let num_dado_cuatro = rand_dado()
    let num_dado_cinco = rand_dado()
    if (dado_uno.style.color == "red"){
        dado_uno 
    }
    else{
    dado_uno.innerText = num_dado_uno
    }
    if (dado_dos.style.color == "red"){
        dado_dos 
    }
    else{
    dado_dos.innerText = num_dado_dos
    }
    if (dado_tres.style.color == "red"){
        dado_tres
    }
    else{
    dado_tres.innerText = num_dado_tres
    }
    if (dado_cuatro.style.color == "red"){
        dado_cuatro 
    }
    else{
    dado_cuatro.innerText = num_dado_cuatro
    }
    if (dado_cinco.style.color == "red"){
        dado_cinco
    }
    else{
    dado_cinco.innerText = num_dado_cinco
    }
    })
})



blok(dado_uno)
blok(dado_dos)
blok(dado_tres)
blok(dado_cuatro)
blok(dado_cinco)


function blok(dado){
    dado.addEventListener('click',()=>{
        dado.style.color = "red"
        let conver = dado.textContent
        combo.push(Number(conver))
        
    })
}

btn_turno.addEventListener('click',()=>{
    btn_turno.innerText = "Jugador 2"
    while(btn_turno = true){
    let res = combo.map((elm)=> elm)
console.log(res)
res.sort()
if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] == "")){
    alert("generala")
    tabla_uno.children[10].innerText = "50"
}
else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
    alert("poker")
    tabla_uno.children[9].innerText = "40"
}
else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
    alert("tenes full")
    tabla_uno.children[8].innerText = "30"
}
else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
    alert("escalera")
    tabla_uno.children[7].innerText = "20"
}
else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
    alert("escalera")
    tabla_uno.children[7].innerText = "20"
}
// suma de numeros para meter en la tabla
else if ((res[0]) == res[1] && (res[1] == res[2])){
    let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    if(total_turno == 15){
        tabla_uno.children[5].innerText = "15"
    }
    else if (total_turno == 18){
        tabla_uno.children[6].innerText = "18"
    }
    else if (total_turno == 12){
        tabla_uno.children[4].innerText = "12"
    }
    else if (total_turno == 9){
        tabla_uno.children[3].innerText = "9"
    }
    else if (total_turno == 6){
        tabla_uno.children[2].innerText = "6"
    }
    else if (total_turno == 3){
        tabla_uno.children[1].innerText = "3"
    }
}
    else if (res[0] == res[1]){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 10){
            tabla_uno.children[5].innerText = "10"
        }
        else if (total_turno == 12){
            tabla_uno.children[6].innerText = "12"
        }
        else if (total_turno == 8){
            tabla_uno.children[4].innerText = "8"
        }
        else if (total_turno == 6){
            tabla_uno.children[3].innerText = "6"
        }
        else if (total_turno == 4){
            tabla_uno.children[2].innerText = "4"
        }
        else if (total_turno == 2){
            tabla_uno.children[1].innerText = "2"
        }
    }
    else if (res[0] == 1){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 5){
            tabla_uno.children[5].innerText = "5"
        }
        else if (total_turno == 6){
            tabla_uno.children[6].innerText = "6"
        }
        else if (total_turno == 4){
            tabla_uno.children[4].innerText = "4"
        }
        else if (total_turno == 3){
            tabla_uno.children[3].innerText = "3"
        }
        else if (total_turno == 2){
            tabla_uno.children[2].innerText = "2"
        }
        else if (total_turno == 1){
            tabla_uno.children[1].innerText = "1"
        }
    }

    btn_turno.addEventListener('click',()=>{
        btn_turno.innerText = "Terminar turno"
        reset()
        console.log ("arre")
    })
    }
})

























//   let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//     alert(total_turno)

// alert("turno del jugador 2")













let h1 = document.querySelector("h1")
h1.addEventListener('click',()=>{
h1.style.color = `rgb(${rand()},${rand()},${rand()})`
})

    function rand(){
        return Math.floor(Math.random() * 255)
    }

    // function pedir_num (str,max){
    //     let num = Number(prompt(str))

    //     while (! Number.isInteger(num) || isNaN(num) || (num < 0 || num > max)){
    //         num = Number(prompt(str))
    //     }
    //     return num
    // }
    function suma_total(){
                let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
                return total_turno
                }
    
    function rand_dado(){
        return Math.floor(Math.random()* 6) + 1
    }
    
    function sumar_ronda(){
 
    rondas.innerText= ++contador_ronda
    if(contador_ronda == max_rondas){
       contador_ronda = 0
          }
        if (contador_ronda == 1 ){
        dado_uno.style.color = "white"
        dado_dos.style.color = "white"
        dado_tres.style.color = "white"
        dado_cuatro.style.color = "white"
        dado_cinco.style.color = "white" 
        combo.length = 0;
        }
    }
   
function agregar_jugador() {
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let nombre = document.querySelector('#nombre').value 
    document.querySelector('#nombre').value = " "
    players.push(nombre)

        j_uno.innerText = players[0]
        j_dos.innerText = players[1]
        
    user.innerText = "Jugador 2"
})
}


function reset () {
    dado_uno.style.color = "white"
    dado_dos.style.color = "white"
    dado_tres.style.color = "white"
    dado_cuatro.style.color = "white"
    dado_cinco.style.color = "white" 
    combo.length = 0;
}