function combos_ronda(tbl, arr){  
  ++cont
    let res = combo.map((elm)=> elm)
    res.sort()
    contador_ronda = 0
    combo.length = 0;
  //combos
  if (res[0] === undefined){
    --cont
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
      document.querySelector(".tirar").disabled = true
}
//GENERALA DOBLE
if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined) && (tbl.children[10].innerText == 50)){
    
      if(tbl.children[11].innerText == undefined){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes la generala doble",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
        Toastify({
        text: "Hiciste una generala doble",
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
       tbl.children[11].innerText = 100
    arr.push(100)
    }
    
  }
//GENERALA
else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
    
      if(tbl.children[10].innerText != ""){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes la generala",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
        Toastify({
        text: "Hiciste una generala",
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
       tbl.children[10].innerText = 50
    arr.push(50)
    }
    
}
//4 NUMEROS
else if ((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined) && (tbl.children[9].innerText != "") ){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 20){
            if(tbl.children[5].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
               tbl.children[5].innerText = 20
            arr.push(20)
            }
        }
        else if (total_turno == 24){
            if(tbl.children[6].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
                tbl.children[6].innerText = 24
            arr.push(24)
            }
            
        }
        else if (total_turno == 16){
            if(tbl.children[4].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
               tbl.children[4].innerText = 16
            arr.push(16)
            }
            
        }
        else if (total_turno == 12){
            if(tbl.children[3].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
               tbl.children[3].innerText = 12
           arr.push(12)
            }
           
        }
        else if (total_turno == 8){
            if(tbl.children[2].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
                tbl.children[2].innerText = 8
            arr.push(8)
            }
            
        }
        else if (total_turno == 4){
            if(tbl.children[1].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
               tbl.children[1].innerText = 4
            arr.push(4)
            }
            
        }
}
//POKER
else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
    
      if(tbl.children[9].innerText != ""){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes poker",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
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
      tbl.children[9].innerText = 40
    arr.push(40)
    }
    
}
//FULL
else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
    
      if(tbl.children[8].innerText != ""){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes full",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
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
      tbl.children[8].innerText = 30
    arr.push(30)
    }
   
}
//ESCALERA 1
else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
    
      if(tbl.children[7].innerText != ""){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes escalera",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
        Toastify({
        text: "Hiciste una escalera",
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
      tbl.children[7].innerText = 20
    arr.push(20)
    }
    
}
//ESCALERA 2
else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
    
      if(tbl.children[7].innerText != ""){
        --cont
        blanquear_dados()
        Toastify({
            text: "Ya tenes escalera",
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
          document.querySelector(".tirar").disabled = true
    }
    else{
        Toastify({
        text: "Hiciste una escalera",
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
      tbl.children[7].innerText = 20 
    arr.push(20)
    }
}
// suma de numeros para meter en la tabla
//3 NUMEROS
else if ((res[0]) == res[1] && (res[1] == res[2]) && (res[3] == undefined)){
    let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    if(total_turno == 15){
        if(tbl.children[5].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[5].innerText = 15
        arr.push(15)
        }
    }
    else if (total_turno == 18){
        if(tbl.children[6].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[6].innerText = 18
        arr.push(18)
        }
        
    }
    else if (total_turno == 12){
        if(tbl.children[4].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[4].innerText = 12
        arr.push(12)
        }
        
    }
    else if (total_turno == 9){
        if(tbl.children[3].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[3].innerText = 9
       arr.push(9)
        }
       
    }
    else if (total_turno == 6){
        if(tbl.children[2].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[2].innerText = 6
        arr.push(6)
        }
        
    }
    else if (total_turno == 3){
        if(tbl.children[1].innerText != ""){
            --cont
            blanquear_dados()
            Toastify({
                text: "Ya tenes este numero seleccione otro o borre un numero",
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
              document.querySelector(".tirar").disabled = true
        }
        else{
          tbl.children[1].innerText = 3
        arr.push(3)
        }
        
    }
}
//2 NUMEROS
else if ((res[0] == res[1]) && (res[2] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 10){
            if(tbl.children[5].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[5].innerText = 10
            arr.push(10) 
            }
        }
        else if (total_turno == 12){
            if(tbl.children[6].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[6].innerText = 12
            arr.push(12)
            }
        }
        else if (total_turno == 8){
            if(tbl.children[4].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[4].innerText = 8
            arr.push(8)
            }
            
        }
        else if (total_turno == 6){
            if(tbl.children[3].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[3].innerText = 6
            arr.push(6)
            }
            
        }
        else if (total_turno == 4){
            if(tbl.children[2].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[2].innerText = 4
            arr.push(4)
            }
            
        }
        else if (total_turno == 2){
            if(tbl.children[1].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[1].innerText = 2
            arr.push(2)
            }
            
        }
}
// 1
else if ((res[0] == 1) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if (total_turno == 1){
            if(tbl.children[1].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[1].innerText = 1
            arr.push(1)
            }
            
        }
}
// 2
else if ((res[0] == 2) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if (total_turno == 2){
            if(tbl.children[2].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[2].innerText = 2
            arr.push(2)
            }
            
        }
}
// 3
else if ((res[0] == 3) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if (total_turno == 3){
            if(tbl.children[3].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[3].innerText = 3
            arr.push(3)
            }
            
        }
}
// 4
else if ((res[0] == 4) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if (total_turno == 4){
            if(tbl.children[4].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[4].innerText = 4
            arr.push(4)
            }
            
        }
}
// 5
else if ((res[0] == 5) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if(total_turno == 5){
            if(tbl.children[5].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[5].innerText = 5
            arr.push(5)
            }
            
        }
}
// 6
else if ((res[0] == 6) && (res[1] == undefined)){
        let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
        if (total_turno == 6){
            if(tbl.children[6].innerText != ""){
                --cont
                blanquear_dados()
                Toastify({
                    text: "Ya tenes este numero seleccione otro o borre un numero",
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
                  document.querySelector(".tirar").disabled = true
            }
            else{
              tbl.children[6].innerText = 6
            arr.push(6)
            }
            
        }
}
else{
  --cont
  document.querySelector(".tirar").disabled = true
  dado_uno.style.color = "white"
  dado_dos.style.color = "white"
  dado_tres.style.color = "white"
  dado_cuatro.style.color = "white"
  dado_cinco.style.color = "white" 
  Toastify({
    text: "Terminaste el turno y no seleccionaste un combo o numero valido, selecciona o elimina un numero",
    duration: 5000,
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
// if(cont %2 == 0){
    
//     Toastify({
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
// }
// else{
//             Toastify({
//         text: "turno de " + j_dos.innerText,
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
// }
}

function tachar_num_uno(n, m){
  tabla_uno.children[n].addEventListener('click',()=>{
    document.querySelector(".tirar").disabled = false
    if (tabla_uno.children[n].innerText != ""){
      Toastify({
        text: "Ya tenes este numero",
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
    else{
  if(cont == 0){
      tabla_uno.children[n].innerText = "X"
      ++cont
      let max = m
      if (cont == max){
        cont = 0
      }
      if(n == 7){
        Toastify({
          text: "te borraste la escalera es el turno turno de " + j_dos.innerText,
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
      else if(n == 8){
        Toastify({
          text: "te borraste el full es el turno turno de " + j_dos.innerText,
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
      else if(n == 9){
        Toastify({
          text: "te borraste el poker es el turno turno de " + j_dos.innerText,
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
      else if(n == 10){
        Toastify({
          text: "te borraste la generala es el turno turno de " + j_dos.innerText,
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
      else if(n == 11){
        Toastify({
          text: "te borraste la generala doble es el turno turno de " + j_dos.innerText,
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
      else{
        Toastify({
        text: "te borraste el " + `${n}` + " turno de " + j_dos.innerText,
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
    }
  
  if(cont == 22){
    let th_total = document.createElement("th")
    th_total.textContent = "total"
    numeros_tabla.append(th_total)
    let th_uno = document.createElement("th")
    th_uno.textContent = total_jugadores(arr_uno)
    tabla_uno.append(th_uno)
    let th_dos = document.createElement("th")
    th_dos.textContent = total_jugadores(arr_dos)
    tabla_dos.append(th_dos)
    if (total_jugadores(arr_dos) > total_jugadores(arr_uno)){
        Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
        let btn_reset = document.createElement("button")
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
    else if (total_jugadores(arr_dos) == total_jugadores(arr_uno)){
        Swal.fire("Empataron");
        let btn_reset = document.createElement("button")
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
    else{
        Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
        let btn_reset = document.createElement("button")
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
}
})
}

function tachar_num_dos(n, m){
  tabla_dos.children[n].addEventListener('click',()=>{
    document.querySelector(".tirar").disabled = false
    if (tabla_dos.children[n].innerText != ""){
      Toastify({
        text: "Ya tenes este numero",
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
    else{
  if(cont == 1){
      tabla_dos.children[n].innerText = "X"
      ++cont
      let max = m
      if (cont == max){
        cont = 0
      }
      if(n == 7){
        Toastify({
          text: "te borraste la escalera es el turno turno de " + j_uno.innerText,
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
      else if(n == 8){
        Toastify({
          text: "te borraste el full es el turno turno de " + j_uno.innerText,
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
      else if(n == 9){
        Toastify({
          text: "te borraste el poker es el turno turno de " + j_uno.innerText,
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
      else if(n == 10){
        Toastify({
          text: "te borraste la generala es el turno turno de " + j_uno.innerText,
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
      else if(n == 11){
        Toastify({
          text: "te borraste la generala doble es el turno turno de " + j_uno.innerText,
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
      else{
        Toastify({
        text: "te borraste el " + `${n}` + " turno de " + j_uno.innerText,
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
    }
  if (num_de_jugadores === 2){

  
  if((tabla_dos_final[1].textContent != "") && (tabla_dos_final[2].textContent != "") && (tabla_dos_final[3].textContent != "") && (tabla_dos_final[4].textContent != "") && (tabla_dos_final[5].textContent != "") && (tabla_dos_final[6].textContent != "") && (tabla_dos_final[7].textContent != "") && (tabla_dos_final[8].textContent != "") && (tabla_dos_final[9].textContent != "") && (tabla_dos_final[10].textContent != "") && (tabla_dos_final[11].textContent != "")){
          
          
            fin_juego()
          if (total_jugadores(arr_dos) > total_jugadores(arr_uno)){
              Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
        
              btn_reset.textContent = "volver a jugar"
              btn_turno.replaceWith(btn_reset)
              btn_reset.classList.add("btn_reset")
              btn_reset.addEventListener('click',()=>{
                  resetear()
                  btn_reset.replaceWith(btn_turno)
              })
          }
          else if (total_jugadores(arr_dos) == total_jugadores(arr_uno)){
              Swal.fire("Empataron");
     
              btn_reset.textContent = "volver a jugar"
              btn_turno.replaceWith(btn_reset)
              btn_reset.classList.add("btn_reset")
              btn_reset.addEventListener('click',()=>{
                  resetear()
                  btn_reset.replaceWith(btn_turno)
              })
          }
          else{
              Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
  
              btn_reset.textContent = "volver a jugar"
              btn_turno.replaceWith(btn_reset)
              btn_reset.classList.add("btn_reset")
              btn_reset.addEventListener('click',()=>{
                  resetear()
                  btn_reset.replaceWith(btn_turno)
              })
          }
      }
    }
    })
}

function tachar_num_tres(n, m){
  tabla_tres.children[n].addEventListener('click',()=>{
    document.querySelector(".tirar").disabled = false
    if (tabla_tres.children[n].innerText != ""){
      Toastify({
        text: "Ya tenes este numero",
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
    else{
  if(cont == 2){
      tabla_tres.children[n].innerText = "X"
      ++cont
      let max = m
      if (cont === max){
        cont = 0
      }
      if(n == 7){
        Toastify({
          text: "te borraste la escalera es el turno turno de " + j_tres.innerText,
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
      else if(n == 8){
        Toastify({
          text: "te borraste el full es el turno de " + j_uno.innerText,
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
      else if(n == 9){
        Toastify({
          text: "te borraste el poker es el turno de " + j_uno.innerText,
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
      else if(n == 10){
        Toastify({
          text: "te borraste la generala es el turno de " + j_uno.innerText,
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
      else if(n == 11){
        Toastify({
          text: "te borraste la generala doble es el turno de " + j_uno.innerText,
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
      else{
        Toastify({
        text: "te borraste el " + `${n}` + " turno de " + j_uno.innerText,
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
    }
    if (num_de_jugadores === 3){
  if((tabla_tres_final[1].textContent != "") && (tabla_tres_final[2].textContent != "") && (tabla_tres_final[3].textContent != "") && (tabla_tres_final[4].textContent != "") && (tabla_tres_final[5].textContent != "") && (tabla_tres_final[6].textContent != "") && (tabla_tres_final[7].textContent != "") && (tabla_tres_final[8].textContent != "") && (tabla_tres_final[9].textContent != "") && (tabla_tres_final[10].textContent != "") && (tabla_tres_final[11].textContent != "")){
    // let th_total = document.createElement("th")
    // th_total.textContent = "total"
    // numeros_tabla.append(th_total)
    // let th_uno = document.createElement("th")
    // th_uno.textContent = total_jugadores(arr_uno)
    // tabla_uno.append(th_uno)
    // let th_dos = document.createElement("th")
    // th_dos.textContent = total_jugadores(arr_dos)
    // tabla_dos.append(th_dos)
    // let th_tres = document.createElement("th")
    // th_tres.textContent = total_jugadores(arr_tres)
    // tabla_tres.append(th_tres)

    fin_juego()

    if ((total_jugadores(arr_tres) > total_jugadores(arr_dos) && total_jugadores(arr_tres) > total_jugadores(arr_uno))){
        Swal.fire("Felicidades " + `${j_tres.textContent}` + " ganaste");
      
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
    
    else if ((total_jugadores(arr_dos) > total_jugadores(arr_tres) && total_jugadores(arr_dos) > total_jugadores(arr_uno))){
      Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
 
      btn_reset.textContent = "volver a jugar"
      btn_turno.replaceWith(btn_reset)
      btn_reset.classList.add("btn_reset")
      btn_reset.addEventListener('click',()=>{
          resetear()
          btn_reset.replaceWith(btn_turno)
      })
  }

  else if ((total_jugadores(arr_uno) > total_jugadores(arr_tres) && total_jugadores(arr_uno) > total_jugadores(arr_dos))){
    Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");

    btn_reset.textContent = "volver a jugar"
    btn_turno.replaceWith(btn_reset)
    btn_reset.classList.add("btn_reset")
    btn_reset.addEventListener('click',()=>{
        resetear()
        btn_reset.replaceWith(btn_turno)
    })
}


    else {
        Swal.fire("Empataron");
   
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
    // else{
    //     Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
    //     let btn_reset = document.createElement("button")
    //     btn_reset.textContent = "volver a jugar"
    //     btn_turno.replaceWith(btn_reset)
    //     btn_reset.classList.add("btn_reset")
    //     btn_reset.addEventListener('click',()=>{
    //         resetear()
    //         btn_reset.replaceWith(btn_turno)
    //     })
    // }
}
}
})
}

function tachar_num_cuatro(n, m){
  tabla_cuatro.children[n].addEventListener('click',()=>{
    document.querySelector(".tirar").disabled = false
    if (tabla_cuatro.children[n].innerText != ""){
      Toastify({
        text: "Ya tenes este numero",
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
    else{
  if(cont == 3){
      tabla_cuatro.children[n].innerText = "X"
      ++cont
      let max = m
      if (cont === max){
        cont = 0
      }
      if(n == 7){
        Toastify({
          text: "te borraste la escalera es el turno de " + j_uno.innerText,
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
      else if(n == 8){
        Toastify({
          text: "te borraste el full es el turno de " + j_uno.innerText,
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
      else if(n == 9){
        Toastify({
          text: "te borraste el poker es el turno de " + j_uno.innerText,
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
      else if(n == 10){
        Toastify({
          text: "te borraste la generala es el turno de " + j_uno.innerText,
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
      else if(n == 11){
        Toastify({
          text: "te borraste la generala doble es el turno de " + j_uno.innerText,
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
      else{
        Toastify({
        text: "te borraste el " + `${n}` + " turno de " + j_uno.innerText,
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
    }
    if (num_de_jugadores === 4){
  if((tabla_cuatro_final[1].textContent != "") && (tabla_cuatro_final[2].textContent != "") && (tabla_cuatro_final[3].textContent != "") && (tabla_cuatro_final[4].textContent != "") && (tabla_cuatro_final[5].textContent != "") && (tabla_cuatro_final[6].textContent != "") && (tabla_cuatro_final[7].textContent != "") && (tabla_cuatro_final[8].textContent != "") && (tabla_cuatro_final[9].textContent != "") && (tabla_cuatro_final[10].textContent != "") && (tabla_cuatro_final[11].textContent != "")){
    // let th_total = document.createElement("th")
    // th_total.textContent = "total"
    // numeros_tabla.append(th_total)
    // let th_uno = document.createElement("th")
    // th_uno.textContent = total_jugadores(arr_uno)
    // tabla_uno.append(th_uno)
    // let th_dos = document.createElement("th")
    // th_dos.textContent = total_jugadores(arr_dos)
    // tabla_dos.append(th_dos)
    // let th_tres = document.createElement("th")
    // th_tres.textContent = total_jugadores(arr_tres)
    // tabla_tres.append(th_tres)
    // let th_cuatro = document.createElement("th")
    // th_cuatro.textContent = total_jugadores(arr_cuatro)
    // tabla_cuatro.append(th_cuatro)
      fin_juego()


    if ((total_jugadores(arr_cuatro) > total_jugadores(arr_tres) && total_jugadores(arr_cuatro) > total_jugadores(arr_dos)&& total_jugadores(arr_cuatro) > total_jugadores(arr_uno))){
        Swal.fire("Felicidades " + `${j_cuatro.textContent}` + " ganaste");
 
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
    
    else if ((total_jugadores(arr_tres) > total_jugadores(arr_cuatro) && total_jugadores(arr_tres) > total_jugadores(arr_dos) && total_jugadores(arr_tres) > total_jugadores(arr_uno))){
      Swal.fire("Felicidades " + `${j_tres.textContent}` + " ganaste");
 
      btn_reset.textContent = "volver a jugar"
      btn_turno.replaceWith(btn_reset)
      btn_reset.classList.add("btn_reset")
      btn_reset.addEventListener('click',()=>{
          resetear()
          btn_reset.replaceWith(btn_turno)
      })
  }

  else if ((total_jugadores(arr_uno) > total_jugadores(arr_tres) && total_jugadores(arr_uno) > total_jugadores(arr_dos) && total_jugadores(arr_uno) > total_jugadores(arr_cuatro))){
    Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
 
    btn_reset.textContent = "volver a jugar"
    btn_turno.replaceWith(btn_reset)
    btn_reset.classList.add("btn_reset")
    btn_reset.addEventListener('click',()=>{
        resetear()
        btn_reset.replaceWith(btn_turno)
    })
}
else if ((total_jugadores(arr_dos) > total_jugadores(arr_tres) && total_jugadores(arr_dos) > total_jugadores(arr_uno) && total_jugadores(arr_dos) > total_jugadores(arr_cuatro))){
  Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
 
  btn_reset.textContent = "volver a jugar"
  btn_turno.replaceWith(btn_reset)
  btn_reset.classList.add("btn_reset")
  btn_reset.addEventListener('click',()=>{
      resetear()
      btn_reset.replaceWith(btn_turno)
  })
}

    else{
        Swal.fire("Empataron");
  
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
  }
    // else{
    //     Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
    //     let btn_reset = document.createElement("button")
    //     btn_reset.textContent = "volver a jugar"
    //     btn_turno.replaceWith(btn_reset)
    //     btn_reset.classList.add("btn_reset")
    //     btn_reset.addEventListener('click',()=>{
    //         resetear()
    //         btn_reset.replaceWith(btn_turno)
    //     })
    // }
}
})
}


function fin_juego(){
  th_total.textContent = "total"
  numeros_tabla.append(th_total)

  th_uno.textContent = total_jugadores(arr_uno)
  tabla_uno.append(th_uno)
  
  th_dos.textContent = total_jugadores(arr_dos)
  tabla_dos.append(th_dos)
  if(num_de_jugadores === 3){
    th_tres.textContent = total_jugadores(arr_tres)
    tabla_tres.append(th_tres)
  }
  else if(num_de_jugadores === 4){
    th_tres.textContent = total_jugadores(arr_tres)
    tabla_tres.append(th_tres)
    th_cuatro.textContent = total_jugadores(arr_cuatro)
    tabla_cuatro.append(th_cuatro)
  }
}


    //CODIGO CLICK DERECHO ELIMINA EL NUMERO BORRADO
    // tabla_uno.children[n].addEventListener('contextmenu',e =>{
    //     e.preventDefault()
    //     j.children[n].innerText = ""
    // })
// }

function turno(){

  tachar_num_uno(1, 2)
  tachar_num_uno(2, 2)
  tachar_num_uno(3, 2)
  tachar_num_uno(4, 2)
  tachar_num_uno(5, 2)
  tachar_num_uno(6, 2)
  tachar_num_uno(7, 2)
  tachar_num_uno(8, 2)
  tachar_num_uno(9, 2)
  tachar_num_uno(10, 2)
  tachar_num_uno(11, 2)

  tachar_num_dos(1, 2)
  tachar_num_dos(2, 2)
  tachar_num_dos(3, 2)
  tachar_num_dos(4, 2)
  tachar_num_dos(5, 2)
  tachar_num_dos(6, 2)
  tachar_num_dos(7, 2)
  tachar_num_dos(8, 2)
  tachar_num_dos(9, 2)
  tachar_num_dos(10, 2)
  tachar_num_dos(11, 2)

      btn_turno.addEventListener('click',()=>{
      blanquear_dados()
      document.querySelector(".terminar_turno").disabled = true
      document.querySelector(".tirar").disabled = false

      let max_dos = 2
      if (cont == max_dos){
        cont = 0
      }

    if(cont == 0){
    combos_ronda(tabla_uno, arr_uno)
    if (cont == 1){
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
    else if (cont == 1){
    combos_ronda(tabla_dos, arr_dos)
    if (cont == max_dos){
      cont = 0
    }
    if (cont == 0){
              Toastify({
          text: "turno de " + j_uno.innerText,
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



    if((tabla_dos_final[1].textContent != "") && (tabla_dos_final[2].textContent != "") && (tabla_dos_final[3].textContent != "") && (tabla_dos_final[4].textContent != "") && (tabla_dos_final[5].textContent != "") && (tabla_dos_final[6].textContent != "") && (tabla_dos_final[7].textContent != "") && (tabla_dos_final[8].textContent != "") && (tabla_dos_final[9].textContent != "") && (tabla_dos_final[10].textContent != "") && (tabla_dos_final[11].textContent != "")){
        fin_juego()
        if (total_jugadores(arr_dos) > total_jugadores(arr_uno)){
            Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
     
            btn_reset.textContent = "volver a jugar"
            btn_turno.replaceWith(btn_reset)
            btn_reset.classList.add("btn_reset")
            btn_reset.addEventListener('click',()=>{
                resetear()
                btn_reset.replaceWith(btn_turno)
            })
        }
        else if (total_jugadores(arr_dos) == total_jugadores(arr_uno)){
            Swal.fire("Empataron");

            btn_reset.textContent = "volver a jugar"
            btn_turno.replaceWith(btn_reset)
            btn_reset.classList.add("btn_reset")
            btn_reset.addEventListener('click',()=>{
                resetear()
                btn_reset.replaceWith(btn_turno)
            })
        }
        else{
            Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
        
            btn_reset.textContent = "volver a jugar"
            btn_turno.replaceWith(btn_reset)
            btn_reset.classList.add("btn_reset")
            btn_reset.addEventListener('click',()=>{
                resetear()
                btn_reset.replaceWith(btn_turno)
            })
        }
    }
    })
}


function turno_tres(){

  tachar_num_uno(1, 3)
  tachar_num_uno(2, 3)
  tachar_num_uno(3, 3)
  tachar_num_uno(4, 3)
  tachar_num_uno(5, 3)
  tachar_num_uno(6, 3)
  tachar_num_uno(7, 3)
  tachar_num_uno(8, 3)
  tachar_num_uno(9, 3)
  tachar_num_uno(10, 3)
  tachar_num_uno(11, 3)

  tachar_num_dos(1, 3)
  tachar_num_dos(2, 3)
  tachar_num_dos(3, 3)
  tachar_num_dos(4, 3)
  tachar_num_dos(5, 3)
  tachar_num_dos(6, 3)
  tachar_num_dos(7, 3)
  tachar_num_dos(8, 3)
  tachar_num_dos(9, 3)
  tachar_num_dos(10, 3)
  tachar_num_dos(11, 3)

  tachar_num_tres(1, 3)
  tachar_num_tres(2, 3)
  tachar_num_tres(3, 3)
  tachar_num_tres(4, 3)
  tachar_num_tres(5, 3)
  tachar_num_tres(6, 3)
  tachar_num_tres(7, 3)
  tachar_num_tres(8, 3)
  tachar_num_tres(9, 3)
  tachar_num_tres(10, 3)
  tachar_num_tres(11, 3)

      btn_turno.addEventListener('click',()=>{
      blanquear_dados()
      document.querySelector(".terminar_turno").disabled = true
      document.querySelector(".tirar").disabled = false

    let max_tres = 3
    if (cont === max_tres){
      cont = 0
    }

    if(cont == 0){
    combos_ronda(tabla_uno, arr_uno)

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
    else if (cont == 1){
    combos_ronda(tabla_dos, arr_dos)
              Toastify({
          text: "turno de " + j_tres.innerText,
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

    else if(cont == 2){
      combos_ronda(tabla_tres, arr_tres)
    Toastify({
      text: "turno de " + j_uno.innerText,
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


    if((tabla_tres_final[1].textContent != "") && (tabla_tres_final[2].textContent != "") && (tabla_tres_final[3].textContent != "") && (tabla_tres_final[4].textContent != "") && (tabla_tres_final[5].textContent != "") && (tabla_tres_final[6].textContent != "") && (tabla_tres_final[7].textContent != "") && (tabla_tres_final[8].textContent != "") && (tabla_tres_final[9].textContent != "") && (tabla_tres_final[10].textContent != "") && (tabla_tres_final[11].textContent != "")){
      fin_juego()
        if ((total_jugadores(arr_tres) > total_jugadores(arr_dos) && total_jugadores(arr_tres) > total_jugadores(arr_uno))){
          Swal.fire("Felicidades " + `${j_tres.textContent}` + " ganaste");
     
          btn_reset.textContent = "volver a jugar"
          btn_turno.replaceWith(btn_reset)
          btn_reset.classList.add("btn_reset")
          btn_reset.addEventListener('click',()=>{
              resetear()
              btn_reset.replaceWith(btn_turno)
          })
      }
      
      else if ((total_jugadores(arr_dos) > total_jugadores(arr_tres) && total_jugadores(arr_dos) > total_jugadores(arr_uno))){
        Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
 
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
  
    else if ((total_jugadores(arr_uno) > total_jugadores(arr_tres) && total_jugadores(arr_uno) > total_jugadores(arr_dos))){
      Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
 
      btn_reset.textContent = "volver a jugar"
      btn_turno.replaceWith(btn_reset)
      btn_reset.classList.add("btn_reset")
      btn_reset.addEventListener('click',()=>{
          resetear()
          btn_reset.replaceWith(btn_turno)
      })
  }
  
  
      else {
          Swal.fire("Empataron");
  
          btn_reset.textContent = "volver a jugar"
          btn_turno.replaceWith(btn_reset)
          btn_reset.classList.add("btn_reset")
          btn_reset.addEventListener('click',()=>{
              resetear()
              btn_reset.replaceWith(btn_turno)
          })
      }
        // else{
        //     Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
        //     let btn_reset = document.createElement("button")
        //     btn_reset.textContent = "volver a jugar"
        //     btn_turno.replaceWith(btn_reset)
        //     btn_reset.classList.add("btn_reset")
        //     btn_reset.addEventListener('click',()=>{
        //         resetear()
        //         btn_reset.replaceWith(btn_turno)
        //     })
        // }
    }
    })
}

function turno_cuatro(){

  tachar_num_uno(1, 4)
  tachar_num_uno(2, 4)
  tachar_num_uno(3, 4)
  tachar_num_uno(4, 4)
  tachar_num_uno(5, 4)
  tachar_num_uno(6, 4)
  tachar_num_uno(7, 4)
  tachar_num_uno(8, 4)
  tachar_num_uno(9, 4)
  tachar_num_uno(10, 4)
  tachar_num_uno(11, 4)

  tachar_num_dos(1, 4)
  tachar_num_dos(2, 4)
  tachar_num_dos(3, 4)
  tachar_num_dos(4, 4)
  tachar_num_dos(5, 4)
  tachar_num_dos(6, 4)
  tachar_num_dos(7, 4)
  tachar_num_dos(8, 4)
  tachar_num_dos(9, 4)
  tachar_num_dos(10, 4)
  tachar_num_dos(11, 4)

  tachar_num_tres(1, 4)
  tachar_num_tres(2, 4)
  tachar_num_tres(3, 4)
  tachar_num_tres(4, 4)
  tachar_num_tres(5, 4)
  tachar_num_tres(6, 4)
  tachar_num_tres(7, 4)
  tachar_num_tres(8, 4)
  tachar_num_tres(9, 4)
  tachar_num_tres(10, 4)
  tachar_num_tres(11, 4)

  tachar_num_cuatro(1, 4)
  tachar_num_cuatro(2, 4)
  tachar_num_cuatro(3, 4)
  tachar_num_cuatro(4, 4)
  tachar_num_cuatro(5, 4)
  tachar_num_cuatro(6, 4)
  tachar_num_cuatro(7, 4)
  tachar_num_cuatro(8, 4)
  tachar_num_cuatro(9, 4)
  tachar_num_cuatro(10, 4)
  tachar_num_cuatro(11, 4)

      btn_turno.addEventListener('click',()=>{
      blanquear_dados()
      document.querySelector(".terminar_turno").disabled = true
      document.querySelector(".tirar").disabled = false

      let max_cuatro = 4
      if (cont === max_cuatro){
        cont = 0
      }
    if(cont == 0){
    combos_ronda(tabla_uno, arr_uno)

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
    else if (cont == 1){
    combos_ronda(tabla_dos, arr_dos)
              Toastify({
          text: "turno de " + j_tres.innerText,
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

    else if(cont == 2){
      combos_ronda(tabla_tres, arr_tres)
    Toastify({
      text: "turno de " + j_cuatro.innerText,
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


    else if(cont == 3){
      combos_ronda(tabla_cuatro, arr_cuatro)
    Toastify({
      text: "turno de " + j_uno.innerText,
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



    if((tabla_cuatro_final[1].textContent != "") && (tabla_cuatro_final[2].textContent != "") && (tabla_cuatro_final[3].textContent != "") && (tabla_cuatro_final[4].textContent != "") && (tabla_cuatro_final[5].textContent != "") && (tabla_cuatro_final[6].textContent != "") && (tabla_cuatro_final[7].textContent != "") && (tabla_cuatro_final[8].textContent != "") && (tabla_cuatro_final[9].textContent != "") && (tabla_cuatro_final[10].textContent != "") && (tabla_cuatro_final[11].textContent != "")){
       fin_juego()
        if ((total_jugadores(arr_cuatro) > total_jugadores(arr_tres) && total_jugadores(arr_cuatro) > total_jugadores(arr_dos) && total_jugadores(arr_cuatro) > total_jugadores(arr_uno))){
          Swal.fire("Felicidades " + `${j_cuatro.textContent}` + " ganaste");
   
          btn_reset.textContent = "volver a jugar"
          btn_turno.replaceWith(btn_reset)
          btn_reset.classList.add("btn_reset")
          btn_reset.addEventListener('click',()=>{
              resetear()
              btn_reset.replaceWith(btn_turno)
          })
      }
      
      else if ((total_jugadores(arr_tres) > total_jugadores(arr_cuatro) && total_jugadores(arr_tres) > total_jugadores(arr_dos) && total_jugadores(arr_tres) > total_jugadores(arr_uno))){
        Swal.fire("Felicidades " + `${j_tres.textContent}` + " ganaste");
  
        btn_reset.textContent = "volver a jugar"
        btn_turno.replaceWith(btn_reset)
        btn_reset.classList.add("btn_reset")
        btn_reset.addEventListener('click',()=>{
            resetear()
            btn_reset.replaceWith(btn_turno)
        })
    }
  
    else if ((total_jugadores(arr_dos) > total_jugadores(arr_cuatro) && total_jugadores(arr_dos) > total_jugadores(arr_tres) && total_jugadores(arr_dos) > total_jugadores(arr_uno))){
      Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");

      btn_reset.textContent = "volver a jugar"
      btn_turno.replaceWith(btn_reset)
      btn_reset.classList.add("btn_reset")
      btn_reset.addEventListener('click',()=>{
          resetear()
          btn_reset.replaceWith(btn_turno)
      })
  }
  else if ((total_jugadores(arr_uno) > total_jugadores(arr_cuatro) && total_jugadores(arr_uno) > total_jugadores(arr_tres) && total_jugadores(arr_uno) > total_jugadores(arr_dos))){
    Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");

    btn_reset.textContent = "volver a jugar"
    btn_turno.replaceWith(btn_reset)
    btn_reset.classList.add("btn_reset")
    btn_reset.addEventListener('click',()=>{
        resetear()
        btn_reset.replaceWith(btn_turno)
    })
}
  
  
      else {
          Swal.fire("Empataron");
  
          btn_reset.textContent = "volver a jugar"
          btn_turno.replaceWith(btn_reset)
          btn_reset.classList.add("btn_reset")
          btn_reset.addEventListener('click',()=>{
              resetear()
              btn_reset.replaceWith(btn_turno)
          })
      }
        // else{
        //     Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
        //     let btn_reset = document.createElement("button")
        //     btn_reset.textContent = "volver a jugar"
        //     btn_turno.replaceWith(btn_reset)
        //     btn_reset.classList.add("btn_reset")
        //     btn_reset.addEventListener('click',()=>{
        //         resetear()
        //         btn_reset.replaceWith(btn_turno)
        //     })
        // }
    }
    })
}




function blok(dado){
    dado.addEventListener('click',()=>{
        habilitar()
        dado.style.boxShadow = "0px 0px 12px 6px red"
        let conver = dado.textContent
        combo.push(Number(conver))
        if(dado.textContent == ""){
        document.querySelector(".terminar_turno").disabled = true
      }
    })
}

function desblok(dado){
    dado.addEventListener('contextmenu',e =>{
        e.preventDefault()
        dado.style.boxShadow = "#7117bb 0px 0px 12px 6px"
        let desbloqueo = dado.textContent
        let num_desbloqueo = (Number(desbloqueo))
        let wew = combo.some((elm)=> elm == num_desbloqueo)
        console.log(wew)
        if (wew == true){
        let indice_num = combo.indexOf(num_desbloqueo)
        combo.splice(indice_num, 1)
        deshabilitar()
        }
        
    })
}

function rand(){
            return Math.floor(Math.random() * 255)
}
    
function suma_total(){
                    let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
                    return total_turno
}

function total_jugadores(arr){
    let resul_final = arr.reduce((acc,elm ) => acc + elm, 0)
    return resul_final
}

function rand_dado(){
            return Math.floor(Math.random()* 6) + 1
}
        
function sumar_ronda(){
     
        rondas.innerText= ++contador_ronda
        if(contador_ronda == max_rondas){
          contador_ronda = 0
          document.querySelector(".tirar").disabled = true
            }
            if (contador_ronda == 1 ){
            habilitar()  
            blanquear_dados()
            // dado_uno.style.boxShadow = "#7117bb";
            // dado_dos.style.boxShadow = "#7117bb";
            // dado_tres.style.boxShadow = "#7117bb";
            // dado_cuatro.style.boxShadow = "#7117bb";
            // dado_cinco.style.boxShadow = "#7117bb";
            combo.length = 0;
            deshabilitar()
            }
}

function seleccion_numeros (d,t,c){
  formulario_num.addEventListener('submit',(e)=>{
    e.preventDefault()
    })
  cantidad_players[d].addEventListener('click',()=>{
    btn_jug.disabled = false;
      let conver_num = cantidad_players[d].textContent
      cantidad_players[d].style.color = "red"
      cantidad_players[t].style.color = "white"
      cantidad_players[c].style.color = "white"
      num_de_jugadores = Number(conver_num) 
      // console.log (num_de_jugadores.innerText) 
  })
  
  }


function agregar_jugador() {

  if(num_de_jugadores === 2){
    tabla_tres.style.display = "none",
    tabla_cuatro.style.display = "none",
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        let nombre = document.querySelector('#nombre').value  
        document.querySelector('#nombre').value = ""
        players.push(nombre)
    
            j_uno.innerText = players[0] || "J1"
            j_dos.innerText = players[1] || "J2"
            
        user.innerText = "Jugador 2"
    })
    turno()
  }




  else if(num_de_jugadores === 3){
    tabla_cuatro.style.display = "none",
    
    formulario.addEventListener('submit',(e)=>{
      e.preventDefault()
      
      let nombre = document.querySelector('#nombre').value  
      document.querySelector('#nombre').value = ""
      players.push(nombre)
  
          j_uno.innerText = players[0] || "J1"
          j_dos.innerText = players[1] || "J2"
          j_tres.innerText = players[2] || "J3"
          
      user.innerText = "Jugador 2"
      formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        user.innerText = "Jugador 3"
      })
  })
  turno_tres()
  }

  else if(num_de_jugadores === 4){
    
    formulario.addEventListener('submit',(e)=>{
      e.preventDefault()
      
      let nombre = document.querySelector('#nombre').value  
      document.querySelector('#nombre').value = ""
      players.push(nombre)
  
          j_uno.innerText = players[0] || "J1"
          j_dos.innerText = players[1] || "J2"
          j_tres.innerText = players[2] || "J3"
          j_cuatro.innerText = players[3] || "J4"
          
      user.innerText = "Jugador 2"
      formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        user.innerText = "Jugador 3"
           formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        user.innerText = "Jugador 4"
      })
      })
  })
  turno_cuatro()
  }

}
    
function resetear(){
    cont_usuario = 0 
    cont = 0
    reiniciarTabla()
    juegoEnCurso = false
    // cantidad_jugadores.style.display = "flex"
    // cantidad_players[0].style.color = "white"
    // cantidad_players[1].style.color = "white"
    // cantidad_players[2].style.color = "white"
    user.innerText = "Jugador 1"
    btn_jug.disabled = true;
    btn_jug.addEventListener('click',()=>[
      formulario.style.display = "flex"
    ])
    
    btn_turno.style.display = "none"
    players.length = 0
    arr_uno.length = 0
    arr_dos.length = 0
    arr_tres.length = 0
    arr_cuatro.length = 0
    dado_uno.style.display = "none"
    dado_dos.style.display = "none"
    dado_tres.style.display = "none"
    dado_cuatro.style.display = "none"
    dado_cinco.style.display = "none"
    anotador.style.display = "none"
    btn_tirar.style.display = "none"
    rondas.style.display = "none"
    document.querySelector(".tirar").disabled = false
    numeros_tabla.children[12].remove()
    tabla_uno.children[12].remove()
    tabla_dos.children[12].remove()
    if(num_de_jugadores === 3){
      tabla_tres.children[12].remove()
    }
    if(num_de_jugadores === 4){
     tabla_tres.children[12].remove()
     tabla_cuatro.children[12].remove()
    }
    
    
    // agregar_jugador()
}

function habilitar(){
  document.querySelector(".terminar_turno").disabled = false
}

function deshabilitar(){
  // if ((dado_uno.style.boxShadow = "#7117bb") && (dado_dos.style.boxShadow = "#7117bb") && (dado_tres.style.boxShadow = "#7117bb") && (dado_cuatro.style.boxShadow = "#7117bb") && (dado_cinco.style.boxShadow = "#7117bb")){
  //   document.querySelector(".terminar_turno").disabled = true
  // }
  if (combo == ""){
    document.querySelector(".terminar_turno").disabled = true
    blanquear_dados()
  }
}

function blanquear_dados(){
  dado_uno.style.boxShadow = "0px 0px 12px 6px #7117bb";
  dado_dos.style.boxShadow = "0px 0px 12px 6px #7117bb";
  dado_tres.style.boxShadow = "0px 0px 12px 6px #7117bb";
  dado_cuatro.style.boxShadow = "0px 0px 12px 6px #7117bb";
  dado_cinco.style.boxShadow = "0px 0px 12px 6px #7117bb";
}


function reiniciarTabla(){
let tabla = document.querySelector("table")

for (let i =1; i < tabla.rows.length; i++){

let fila = tabla.rows[i];
for (let j = 0; j < fila.cells.length; j++){
  let celda = fila.cells[j];
  celda.innerText = ""
  }
}
}