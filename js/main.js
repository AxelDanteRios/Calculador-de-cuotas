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
let numeros_tabla = document.querySelector(".lista_num");
let j_uno = document.querySelector(".jugador_uno");
let j_dos = document.querySelector(".jugador_dos");
let tabla_uno = document.querySelector(".tabla_j_uno");
let tabla_dos = document.querySelector(".tabla_j_dos");
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
        for(let i = 0; i < num_negro.length; i ++){
            num_negro[i].style.color = "white" 
         }
        localStorage.setItem('modo_body','bg_dark')
    }
})
agregar_jugador()
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
    if (cont_usuario == 2){
        formulario.style.display = "none"
        btn_turno.style.display = "block"
        dado_uno.textContent = ""
        dado_dos.textContent = ""
        dado_tres.textContent = ""
        dado_cuatro.textContent = ""
        dado_cinco.textContent = ""
        dado_uno.style.display = "block" 
        dado_dos.style.display = "block"
        dado_tres.style.display = "block"
        dado_cuatro.style.display = "block"
        dado_cinco.style.display = "block"
        anotador.style.display = "block"
        btn_tirar.style.display = "block"
        rondas.style.display = "block"
        rondas.innerText = "Rondas"
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
