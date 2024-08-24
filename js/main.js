let h1 = document.querySelector("h1")
let cantidad_players = document.querySelectorAll("form p");
let nombre_jugadores = document.querySelector(".boton_usuario");
let cantidad_jugadores = document.querySelector(".cant_jugadores");
let btn_jug = document.querySelector(".btn_num_jug");
let btn_usuario = document.querySelector(".btn");
let user = document.querySelector(".boton_usuario label");
let formulario_num = document.querySelector(".form_num");
let formulario = document.querySelector(".form_nom");
let dado_uno = document.querySelector(".img1");
let dado_dos = document.querySelector(".img2");
let dado_tres = document.querySelector(".img3");
let dado_cuatro = document.querySelector(".img4");
let dado_cinco = document.querySelector(".img5");
let btn_tirar = document.querySelector(".tirar");
let btn_turno = document.querySelector(".terminar_turno");
let numeros_tabla = document.querySelector(".lista_num");
let j_uno = document.querySelector(".jugador_uno");
let j_dos = document.querySelector(".jugador_dos");
let j_tres = document.querySelector(".jugador_tres");
let j_cuatro = document.querySelector(".jugador_cuatro");
let tabla_uno = document.querySelector(".tabla_j_uno");
let tabla_dos = document.querySelector(".tabla_j_dos");
let tabla_dos_final = document.querySelectorAll(".tabla_j_dos th");
let tabla_tres = document.querySelector(".tabla_j_tres");
let tabla_tres_final = document.querySelectorAll(".tabla_j_tres th");
let tabla_cuatro = document.querySelector(".tabla_j_cuatro");
let tabla_cuatro_final = document.querySelectorAll(".tabla_j_cuatro th");
let rondas = document.querySelector(".ronda");
let anotador = document.querySelector("#secti");
let num_negro = document.querySelectorAll("th");
let ax = document.querySelector(".axel");
let mode = document.querySelector(".darkmode");
let sonido_on = document.querySelector(".sonido");
let sonido_off = document.querySelector(".sonido_mute");
let musica = document.querySelector("audio");
const max_rondas = 3;
let contador_ronda = 0;
let cont_usuario = 0;
let cont = 0;
btn_turno.style.display = "none"
document.querySelector(".tirar").disabled = false;
let th_total = document.createElement("th");
let th_uno = document.createElement("th");
let th_dos = document.createElement("th");
let th_tres = document.createElement("th");
let th_cuatro = document.createElement("th");
let btn_reset = document.createElement("button")

let bek = true
let dadek = document.querySelectorAll(".dados img")




sonido_on.addEventListener("click",()=>{
    musica.play();
})
sonido_off.addEventListener("click",()=>{
    musica.pause();
})


//     let card = document.querySelector('.card_body')
//     let url = "https://api.thecatapi.com/v1/images/search";

//     let data = async () => (await fetch(url)).json();


//  let gatitos = setInterval(()=>{

//         data().then((res) => {
//             let img = document.createElement("img");
//             img.src = res[0].url;
//             document.querySelector('.card_body').innerHTML = " "
//             card.append(img);
//         }).catch((error) =>{
//             alert(error);
//         })

// }, 10000)

// card.addEventListener('click',()=>{
//     clearInterval(gatitos)
//     card.style.display = "none"
// })



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
        sonido_on.style.color = "black"
        sonido_off.style.color = "black"
        mode.style.color = "black"
        ax.style.color = "black"
        th_total.style.color = "black"
        th_uno.style.color = "black"
        th_dos.style.color = "black"
        th_tres.style.color = "black"
        th_cuatro.style.color = "black"
        for(let i = 0; i < num_negro.length; i ++){
           num_negro[i].style.color = "black" 
        }
        localStorage.setItem('modo_body','bg_light')
    }
    else{
        document.body.classList.value = 'bg_dark'
        rondas.style.color = "white"
        sonido_on.style.color = "white"
        sonido_off.style.color = "white"
        mode.style.color = "white"
        ax.style.color = "white"
        th_total.style.color = "white"
         th_uno.style.color = "white"
        th_dos.style.color = "white"
         th_tres.style.color = "white"
        th_cuatro.style.color = "white"
        for(let i = 0; i < num_negro.length; i ++){
            num_negro[i].style.color = "white" 
         }
        localStorage.setItem('modo_body','bg_dark')
    }
})


nombre_jugadores.style.display = "none"


let num_de_jugadores 
seleccion_numeros(0,1,2,3)
seleccion_numeros(1,0,2,3)
seleccion_numeros(2,0,1,3)



btn_jug.addEventListener('click',()=>[




    cantidad_jugadores.style.display = "none",
    nombre_jugadores.style.display = "block",
    

    agregar_jugador()
])



dado_uno.style.display = "none"
dado_dos.style.display = "none"
dado_tres.style.display = "none"
dado_cuatro.style.display = "none"
dado_cinco.style.display = "none"
anotador.style.display = "none"
btn_tirar.style.display = "none"
rondas.style.display = "none"
// aca arranca el juego cuando ingresas dos nombres 
btn_usuario.addEventListener('click',()=>{

    cont_usuario ++


    if (num_de_jugadores === 2){
            if (cont_usuario == 2){
        formulario.style.display = "none"
        btn_turno.style.display = "block"
        nombre_jugadores.style.display = "none"
        dado_uno.textContent = ""
        dado_dos.textContent = ""
        dado_tres.textContent = ""
        dado_cuatro.textContent = ""
        dado_cinco.textContent = ""
        anotador.style.display = "block"
        btn_tirar.style.display = "block"
        rondas.style.display = "block"
        rondas.innerText = "Rondas"
    }
    }
    if (num_de_jugadores === 3){
        if (cont_usuario == 3){
    formulario.style.display = "none"
    btn_turno.style.display = "block"
    nombre_jugadores.style.display = "none"
    dado_uno.textContent = ""
    dado_dos.textContent = ""
    dado_tres.textContent = ""
    dado_cuatro.textContent = ""
    dado_cinco.textContent = ""
    anotador.style.display = "block"
    btn_tirar.style.display = "block"
    rondas.style.display = "block"
    rondas.innerText = "Rondas"
}
}
if (num_de_jugadores === 4){
    if (cont_usuario == 4){
formulario.style.display = "none"
btn_turno.style.display = "block"
nombre_jugadores.style.display = "none"
dado_uno.textContent = ""
dado_dos.textContent = ""
dado_tres.textContent = ""
dado_cuatro.textContent = ""
dado_cinco.textContent = ""
anotador.style.display = "block"
btn_tirar.style.display = "block"
rondas.style.display = "block"
rondas.innerText = "Rondas"
 ax.style.display = "none"
}
}
  
btn_tirar.addEventListener('click',sumar_ronda)
btn_tirar.addEventListener('click',()=>{
        bek = true
        dado_uno.style.display = "block" 
        dado_dos.style.display = "block"
        dado_tres.style.display = "block"
        dado_cuatro.style.display = "block"
        dado_cinco.style.display = "block"
    let num_dado_uno = rand_dado()
    let num_dado_dos = rand_dado()
    let num_dado_tres = rand_dado()
    let num_dado_cuatro = rand_dado()
    let num_dado_cinco = rand_dado()
    if (dado_uno.style.boxShadow == "red 0px 0px 12px 6px"){
        dado_uno 
    }
    else{
    document.querySelector(".img1").setAttribute("src", "../img/dado" + num_dado_uno + ".png");
    dado_uno.innerText = num_dado_uno
    }
    if (dado_dos.style.boxShadow == "red 0px 0px 12px 6px"){
        dado_dos 
    }
    else{
    document.querySelector(".img2").setAttribute("src", "../img/dado" + num_dado_dos + ".png");
    dado_dos.innerText = num_dado_dos
    }
    if (dado_tres.style.boxShadow == "red 0px 0px 12px 6px"){
        dado_tres
    }
    else{
    document.querySelector(".img3").setAttribute("src", "../img/dado" + num_dado_tres + ".png");
    dado_tres.innerText = num_dado_tres
    }
    if (dado_cuatro.style.boxShadow == "red 0px 0px 12px 6px"){
        dado_cuatro 
    }
    else{
    document.querySelector(".img4").setAttribute("src", "../img/dado" + num_dado_cuatro + ".png");    
    dado_cuatro.innerText = num_dado_cuatro
    }
    if (dado_cinco.style.boxShadow == "red 0px 0px 12px 6px"){
        dado_cinco
    }
    else{
    document.querySelector(".img5").setAttribute("src", "../img/dado" + num_dado_cinco + ".png");    
    dado_cinco.innerText = num_dado_cinco
    }
    })
    
})


// turno()


blok(dado_uno)
blok(dado_dos)
blok(dado_tres)
blok(dado_cuatro)
blok(dado_cinco)

// desblok(dado_uno)
// desblok(dado_dos)
// desblok(dado_tres)
// desblok(dado_cuatro)
// desblok(dado_cinco)

