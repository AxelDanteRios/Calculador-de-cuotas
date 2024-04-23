class Juego {
}



function tachar_num(n,j){
    j.children[n].addEventListener('click',()=>{
        j.children[n].innerText = "X"
        cont++
        if(cont %2 == 0){
                   Toastify({
            text: "te borraste el casillero " + `${n}` + " turno de " + j_uno.innerText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "black",
                width: "10%",
                height: "10%",
              background: "linear-gradient(to right, #f700ff, #78cdff)",
            },
          }).showToast(); 
        }
        else {
                Toastify({
         text: "te borraste el casillero " + `${n}` + " turno de " + j_dos.innerText,
         duration: 3000,
         newWindow: true,
         close: true,
         gravity: "top", // `top` or `bottom`
         position: "right", // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
         style: {
             color: "black",
             width: "10%",
             height: "10%",
           background: "linear-gradient(to right, #f700ff, #78cdff)",
         },
       }).showToast(); 
        }
    })
    tabla_uno.children[n].addEventListener('contextmenu',e =>{
        e.preventDefault()
        j.children[n].innerText = ""
    })
}

function turno(){
    btn_turno.addEventListener('click',()=>{
    if(cont %2 == 0){
    ++cont
    let res = combo.map((elm)=> elm)
    res.sort()
    contador_ronda = 0
    combo.length = 0;
    if (res[0] === undefined){
        Toastify({
            text: "selecciona un dado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #f14141, #7b0808)",
            },
          }).showToast();
    }
    else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
        Toastify({
            text: "Hiciste un generala",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_uno.children[10].innerText = 50
        
    }
    else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
        Toastify({
            text: "Hiciste un poker",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_uno.children[9].innerText = 40
    }
    else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
        Toastify({
            text: "Hiciste un full",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_uno.children[8].innerText = 30
    }
    else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
        Toastify({
            text: "Hiciste un escalera",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_uno.children[7].innerText = 20
    }
    else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
        Toastify({
            text: "Hiciste un escalera",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_uno.children[7].innerText = 20
    }
    // suma de numeros para meter en la tabla
    else if ((res[0]) == res[1] && (res[1] == res[2])){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 15){
            tabla_uno.children[5].innerText = 15
        }
        else if (total_turno == 18){
            tabla_uno.children[6].innerText = 18
        }
        else if (total_turno == 12){
            tabla_uno.children[4].innerText = 12
        }
        else if (total_turno == 9){
           tabla_uno.children[3].innerText = 9
        }
        else if (total_turno == 6){
            tabla_uno.children[2].innerText = 6
        }
        else if (total_turno == 3){
            tabla_uno.children[1].innerText = 3
        }
    }
        else if (res[0] == res[1]){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if(total_turno == 10){
                tabla_uno.children[5].innerText = 10
            }
            else if (total_turno == 12){
                tabla_uno.children[6].innerText = 12
            }
            else if (total_turno == 8){
                tabla_uno.children[4].innerText = 8
            }
            else if (total_turno == 6){
                tabla_uno.children[3].innerText = 6
            }
            else if (total_turno == 4){
                tabla_uno.children[2].innerText = 4
            }
            else if (total_turno == 2){
                tabla_uno.children[1].innerText = 2
            }
        }
        else if (res[0] == 1){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 1){
                tabla_uno.children[1].innerText = 1
            }
        }
        else if (res[0] == 2){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 2){
                tabla_uno.children[2].innerText = 2
            }
        }
        else if (res[0] == 3){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 3){
                tabla_uno.children[3].innerText = 3
            }
        }
        else if (res[0] == 4){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 4){
                tabla_uno.children[4].innerText = 4
            }
        }
        else if (res[0] == 5){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if(total_turno == 5){
                tabla_uno.children[5].innerText = 5
            }
        }
        else if (res[0] == 6){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 6){
                tabla_uno.children[6].innerText = 6
            }
        }
        if(cont %2 == 0){
        Toastify({
            text: "turno de " + j_uno.innerText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "black",
                width: "10%",
                height: "10%",
              background: "linear-gradient(to right, #f700ff, #78cdff)",
            },
          }).showToast();
        }
        else{
                Toastify({
            text: "turno de " + j_dos.innerText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "black",
                width: "10%",
                height: "10%",
              background: "linear-gradient(to right, #f700ff, #78cdff)",
            },
          }).showToast();
        }
    }
    else{
        cont++
        let res = combo.map((elm)=> elm)
    res.sort()
    contador_ronda = 0
    combo.length = 0;
    if (res[0] === undefined){
        Toastify({
            text: "selecciona un dado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #f14141, #7b0808)",
            },
          }).showToast();
    }
    else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
        Toastify({
            text: "Hiciste un generala",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_dos.children[10].innerText = 50
        
    }
    else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
        Toastify({
            text: "Hiciste un poker",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_dos.children[9].innerText = 40
    }
    else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
        Toastify({
            text: "Hiciste un full",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_dos.children[8].innerText = 30
    }
    else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
        Toastify({
            text: "Hiciste un escalera",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_dos.children[7].innerText = 20
    }
    else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
        Toastify({
            text: "Hiciste un escalera",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        tabla_dos.children[7].innerText = 20
    }
    // suma de numeros para meter en la tabla
    else if ((res[0]) == res[1] && (res[1] == res[2])){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 15){
            tabla_dos.children[5].innerText = 15
        }
        else if (total_turno == 18){
            tabla_dos.children[6].innerText = 18
        }
        else if (total_turno == 12){
            tabla_dos.children[4].innerText = 12
        }
        else if (total_turno == 9){
           tabla_dos.children[3].innerText = 9
        }
        else if (total_turno == 6){
            tabla_dos.children[2].innerText = 6
        }
        else if (total_turno == 3){
            tabla_dos.children[1].innerText = 3
        }
    }
        else if (res[0] == res[1]){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if(total_turno == 10){
                tabla_dos.children[5].innerText = 10
            }
            else if (total_turno == 12){
                tabla_dos.children[6].innerText = 12
            }
            else if (total_turno == 8){
                tabla_dos.children[4].innerText = 8
            }
            else if (total_turno == 6){
                tabla_dos.children[3].innerText = 6
            }
            else if (total_turno == 4){
                tabla_dos.children[2].innerText = 4
            }
            else if (total_turno == 2){
                tabla_dos.children[1].innerText = 2
            }
        }
        else if (res[0] == 1){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 1){
                tabla_dos.children[1].innerText = 1
            }
        }
        else if (res[0] == 2){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 2){
                tabla_dos.children[2].innerText = 2
            }
        }
        else if (res[0] == 3){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 3){
                tabla_dos.children[3].innerText = 3
            }
        }
        else if (res[0] == 4){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 4){
                tabla_dos.children[4].innerText = 4
            }
        }
        else if (res[0] == 5){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if(total_turno == 5){
                tabla_dos.children[5].innerText = 5
            }
        }
        else if (res[0] == 6){
            let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
            if (total_turno == 6){
                tabla_dos.children[6].innerText = 6
            }
        }
        if(cont %2 == 0){
        Toastify({
            text: "turno de " + j_uno.innerText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "black",
                width: "10%",
                height: "10%",
              background: "linear-gradient(to right, #f700ff, #78cdff)",
            },
          }).showToast();
        }
        else{
                Toastify({
            text: "turno de " + j_dos.innerText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "black",
                width: "10%",
                height: "10%",
              background: "linear-gradient(to right, #f700ff, #78cdff)",
            },
          }).showToast();
        }
    }
    })
}

function blok(dado){
    dado.addEventListener('click',()=>{
        dado.style.color = "red"
        let conver = dado.textContent
        combo.push(Number(conver))
    })
}

function desblok(dado){
    dado.addEventListener('contextmenu',e =>{
        e.preventDefault()
        dado.style.color = "white"
        let desbloqueo = dado.textContent
        let num_desbloqueo = (Number(desbloqueo))
        let indice_num = combo.indexOf(num_desbloqueo)
        combo.splice(indice_num, 1)
    })
}

function rand(){
            return Math.floor(Math.random() * 255)
}
    
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
        document.querySelector('#nombre').value = ""
        players.push(nombre)
    
            j_uno.innerText = players[0] || "J1"
            j_dos.innerText = players[1] || "J2"
            
        user.innerText = "Jugador 2"
    })
}
    