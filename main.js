let play = new Juego ()
let h1 = document.querySelector("h1")
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
let num_negro = document.querySelectorAll("th");
let mode = document.querySelector(".darkmode");
let sonido_on = document.querySelector(".sonido")
let sonido_off = document.querySelector(".sonido_mute")
const max_rondas = 3;
let contador_ronda = 0;
let cont_usuario = 0
btn_turno.style.display = "none"

    let card = document.querySelector('.card_body')
    let url = "https://api.thecatapi.com/v1/images/search";

    let data = async () => (await fetch(url)).json();


 setInterval(()=>{

        data().then((res) => {
            let img = document.createElement("img");
            img.src = res[0].url;
            document.querySelector('.card_body').innerHTML = " "
            card.append(img);
        }).catch((error) =>{
            alert(error);
        })

}, 10000)

  


h1.addEventListener('click',()=>{
    h1.style.color = `rgb(${rand()},${rand()},${rand()})`
    })
    


    if(localStorage.getItem('modo_body')){
        modo_body = localStorage.getItem('modo_body')
        document.body.classList.value = modo_body
    } 

mode.addEventListener('click',()=>{
    let modo_body = document.body.classList.value

    if (modo_body == 'bg_dark'){
        document.body.classList.value = 'bg_light'
        rondas.style.color = "black"
        for(let i = 0; i < num_negro.length; i ++){
           num_negro[i].style.color = "black" 
        }
        localStorage.setItem('modo_body','bg_light')
    }
    else{
        document.body.classList.value = 'bg_dark'
        for(let i = 0; i < num_negro.length; i ++){
            num_negro[i].style.color = "white" 
         }
        localStorage.setItem('modo_body','bg_dark')
    }
})
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


let cont = 0

turno()





blok(dado_uno)
blok(dado_dos)
blok(dado_tres)
blok(dado_cuatro)
blok(dado_cinco)

desblok(dado_uno)
desblok(dado_dos)
desblok(dado_tres)
desblok(dado_cuatro)
desblok(dado_cinco)


 
tachar_num(1, tabla_uno)
tachar_num(2, tabla_uno)
tachar_num(3, tabla_uno)
tachar_num(4, tabla_uno)
tachar_num(5, tabla_uno)
tachar_num(6, tabla_uno)
tachar_num(7, tabla_uno)
tachar_num(8, tabla_uno)
tachar_num(9, tabla_uno)
tachar_num(10, tabla_uno)
tachar_num(11, tabla_uno)
tachar_num(1, tabla_dos)
tachar_num(2, tabla_dos)
tachar_num(3, tabla_dos)
tachar_num(4, tabla_dos)
tachar_num(5, tabla_dos)
tachar_num(6, tabla_dos)
tachar_num(7, tabla_dos)
tachar_num(8, tabla_dos)
tachar_num(9, tabla_dos)
tachar_num(10, tabla_dos)
tachar_num(11, tabla_dos)

//   let total = arr_uno.reduce((acc,elm ) => acc + elm, 0)
//     console.log(total)


// function turno(jugador){
// btn_turno.addEventListener('click',()=>{
// let res = combo.map((elm)=> elm)
// res.sort()
// contador_ronda = 0
// combo.length = 0;
// if (res[0] === undefined){
//     Toastify({
//         text: "selecciona un dado",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #f14141, #7b0808)",
//         },
//       }).showToast();
// }
// else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
//     Toastify({
//         text: "Hiciste un generala",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     jugador.children[10].innerText = 50
    
// }
// else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
//     Toastify({
//         text: "Hiciste un poker",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     jugador.children[9].innerText = 40
// }
// else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
//     Toastify({
//         text: "Hiciste un full",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     jugador.children[8].innerText = 30
// }
// else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
//     Toastify({
//         text: "Hiciste un escalera",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     jugador.children[7].innerText = 20
// }
// else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
//     Toastify({
//         text: "Hiciste un escalera",
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     jugador.children[7].innerText = 20
// }
// // suma de numeros para meter en la tabla
// else if ((res[0]) == res[1] && (res[1] == res[2])){
//     let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//     if(total_turno == 15){
//         jugador.children[5].innerText = 15
//     }
//     else if (total_turno == 18){
//         jugador.children[6].innerText = 18
//     }
//     else if (total_turno == 12){
//         jugador.children[4].innerText = 12
//     }
//     else if (total_turno == 9){
//         jugador.children[3].innerText = 9
//     }
//     else if (total_turno == 6){
//         jugador.children[2].innerText = 6
//     }
//     else if (total_turno == 3){
//         jugador.children[1].innerText = 3
//     }
// }
//     else if (res[0] == res[1]){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if(total_turno == 10){
//             jugador.children[5].innerText = 10
//         }
//         else if (total_turno == 12){
//             jugador.children[6].innerText = 12
//         }
//         else if (total_turno == 8){
//             jugador.children[4].innerText = 8
//         }
//         else if (total_turno == 6){
//             jugador.children[3].innerText = 6
//         }
//         else if (total_turno == 4){
//             jugador.children[2].innerText = 4
//         }
//         else if (total_turno == 2){
//             jugador.children[1].innerText = 2
//         }
//     }
//     else if (res[0] == 1){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if (total_turno == 1){
//             jugador.children[1].innerText = 1
//         }
//     }
//     else if (res[0] == 2){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if (total_turno == 2){
//             jugador.children[2].innerText = 2
//         }
//     }
//     else if (res[0] == 3){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if (total_turno == 3){
//             jugador.children[3].innerText = 3
//         }
//     }
//     else if (res[0] == 4){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if (total_turno == 4){
//             jugador.children[4].innerText = 4
//         }
//     }
//     else if (res[0] == 5){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if(total_turno == 5){
//             jugador.children[5].innerText = 5
//         }
//     }
//     else if (res[0] == 6){
//         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//         if (total_turno == 6){
//             jugador.children[6].innerText = 6
//         }
//     }
//     if(jugador == tabla_uno)
//     Toastify({
//         text: "turno de " + j_dos.innerText,
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             color: "black",
//             width: "10%",
//             height: "10%",
//           background: "linear-gradient(to right, #f700ff, #78cdff)",
//         },
//       }).showToast();
//     else{
//             Toastify({
//         text: "turno de " + j_uno.innerText,
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             color: "black",
//             width: "10%",
//             height: "10%",
//           background: "linear-gradient(to right, #f700ff, #78cdff)",
//         },
//       }).showToast();
//     }

// })
// }








// function blok(dado){
//     dado.addEventListener('click',()=>{
//         dado.style.color = "red"
//         let conver = dado.textContent
//         combo.push(Number(conver))
//     })
// }

// function desblok(dado){
//     dado.addEventListener('contextmenu',e =>{
//         e.preventDefault()
//         dado.style.color = "white"
//         let desbloqueo = dado.textContent
//         let num_desbloqueo = (Number(desbloqueo))
//         let indice_num = combo.indexOf(num_desbloqueo)
//         combo.splice(indice_num, 1)
//     })
// }

// h1.addEventListener('click',()=>{
// h1.style.color = `rgb(${rand()},${rand()},${rand()})`
// })

//     function rand(){
//         return Math.floor(Math.random() * 255)
//     }

//     function suma_total(){
//                 let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
//                 return total_turno
//                 }
    
//     function rand_dado(){
//         return Math.floor(Math.random()* 6) + 1
//     }
    
//     function sumar_ronda(){
 
//     rondas.innerText= ++contador_ronda
//     if(contador_ronda == max_rondas){
//        contador_ronda = 0
//           }
//         if (contador_ronda == 1 ){
//         dado_uno.style.color = "white"
//         dado_dos.style.color = "white"
//         dado_tres.style.color = "white"
//         dado_cuatro.style.color = "white"
//         dado_cinco.style.color = "white" 
//         combo.length = 0;
//         }
//     }
   
// function agregar_jugador() {
// formulario.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let nombre = document.querySelector('#nombre').value  
//     document.querySelector('#nombre').value = ""
//     players.push(nombre)

//         j_uno.innerText = players[0] || "Jugador 1"
//         j_dos.innerText = players[1] || "Jugador 2"
        
//     user.innerText = "Jugador 2"
// })
// }
