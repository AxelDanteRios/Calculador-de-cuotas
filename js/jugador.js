// class Jugadores{
//     constructor(nombre){
//         this.nombre = nombre

// }}
let players = []


let combo = []


let arr_uno = []

let arr_dos = []

//IF
    // ++cont
    // let res = combo.map((elm)=> elm)
    // res.sort()
    // contador_ronda = 0
    // combo.length = 0;
    // //combos
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
    // //GENERALA DOBLE
    // if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined) && (tabla_uno.children[10].innerText == 50)){
        
    //       if(tabla_uno.children[11].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes la generala doble",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una generala doble",
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
    //        tabla_uno.children[11].innerText = 100
    //     arr_uno.push(100)
    //     }
        
    //   }
    // //GENERALA
    // else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
        
    //       if(tabla_uno.children[10].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes la generala",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una generala",
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
    //        tabla_uno.children[10].innerText = 50
    //     arr_uno.push(50)
    //     }
        
    // }
    // //4 NUMEROS
    // else if ((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined) && (tabla_uno.children[9].innerText != "") ){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 20){
    //             if(tabla_uno.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[5].innerText = 20
    //             arr_uno.push(20)
    //             }
    //         }
    //         else if (total_turno == 24){
    //             if(tabla_uno.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                 tabla_uno.children[6].innerText = 24
    //             arr_uno.push(24)
    //             }
                
    //         }
    //         else if (total_turno == 16){
    //             if(tabla_uno.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[4].innerText = 16
    //             arr_uno.push(16)
    //             }
                
    //         }
    //         else if (total_turno == 12){
    //             if(tabla_uno.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[3].innerText = 12
    //            arr_uno.push(12)
    //             }
               
    //         }
    //         else if (total_turno == 8){
    //             if(tabla_uno.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                 tabla_uno.children[2].innerText = 8
    //             arr_uno.push(8)
    //             }
                
    //         }
    //         else if (total_turno == 4){
    //             if(tabla_uno.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[1].innerText = 4
    //             arr_uno.push(4)
    //             }
                
    //         }
    // }
    // //POKER
    // else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
        
    //       if(tabla_uno.children[9].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes poker",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
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
    //        tabla_uno.children[9].innerText = 40
    //     arr_uno.push(40)
    //     }
        
    // }
    // //FULL
    // else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
        
    //       if(tabla_uno.children[8].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes full",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
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
    //        tabla_uno.children[8].innerText = 30
    //     arr_uno.push(30)
    //     }
       
    // }
    // //ESCALERA 1
    // else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
        
    //       if(tabla_uno.children[7].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes escalera",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una escalera",
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
    //        tabla_uno.children[7].innerText = 20
    //     arr_uno.push(20)
    //     }
        
    // }
    // //ESCALERA 2
    // else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
        
    //       if(tabla_uno.children[7].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes escalera",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una escalera",
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
    //        tabla_uno.children[7].innerText = 20 
    //     arr_uno.push(20)
    //     }
    // }
    // // suma de numeros para meter en la tabla
    // //3 NUMEROS
    // else if ((res[0]) == res[1] && (res[1] == res[2])){
    //     let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //     if(total_turno == 15){
    //         if(tabla_uno.children[5].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //            tabla_uno.children[5].innerText = 15
    //         arr_uno.push(15)
    //         }
    //     }
    //     else if (total_turno == 18){
    //         if(tabla_uno.children[6].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //             tabla_uno.children[6].innerText = 18
    //         arr_uno.push(18)
    //         }
            
    //     }
    //     else if (total_turno == 12){
    //         if(tabla_uno.children[4].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //            tabla_uno.children[4].innerText = 12
    //         arr_uno.push(12)
    //         }
            
    //     }
    //     else if (total_turno == 9){
    //         if(tabla_uno.children[3].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //            tabla_uno.children[3].innerText = 9
    //        arr_uno.push(9)
    //         }
           
    //     }
    //     else if (total_turno == 6){
    //         if(tabla_uno.children[2].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //             tabla_uno.children[2].innerText = 6
    //         arr_uno.push(6)
    //         }
            
    //     }
    //     else if (total_turno == 3){
    //         if(tabla_uno.children[1].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //            tabla_uno.children[1].innerText = 3
    //         arr_uno.push(3)
    //         }
            
    //     }
    // }
    // //2 NUMEROS
    //     else if (res[0] == res[1]){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 10){
    //             if(tabla_uno.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[5].innerText = 10
    //             arr_uno.push(10) 
    //             }
    //         }
    //         else if (total_turno == 12){
    //             if(tabla_uno.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_uno.children[6].innerText = 12
    //             arr_uno.push(12)
    //             }
    //         }
    //         else if (total_turno == 8){
    //             if(tabla_uno.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_uno.children[4].innerText = 8
    //             arr_uno.push(8)
    //             }
                
    //         }
    //         else if (total_turno == 6){
    //             if(tabla_uno.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[3].innerText = 6
    //             arr_uno.push(6)
    //             }
                
    //         }
    //         else if (total_turno == 4){
    //             if(tabla_uno.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[2].innerText = 4
    //             arr_uno.push(4)
    //             }
                
    //         }
    //         else if (total_turno == 2){
    //             if(tabla_uno.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[1].innerText = 2
    //             arr_uno.push(2)
    //             }
                
    //         }
    //     }
    //     // 1
    //     else if (res[0] == 1){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 1){
    //             if(tabla_uno.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[1].innerText = 1
    //             arr_uno.push(1)
    //             }
                
    //         }
    //     }
    //     // 2
    //     else if (res[0] == 2){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 2){
    //             if(tabla_uno.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[2].innerText = 2
    //             arr_uno.push(2)
    //             }
                
    //         }
    //     }
    //     // 3
    //     else if (res[0] == 3){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 3){
    //             if(tabla_uno.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[3].innerText = 3
    //             arr_uno.push(3)
    //             }
                
    //         }
    //     }
    //     // 4
    //     else if (res[0] == 4){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 4){
    //             if(tabla_uno.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[4].innerText = 4
    //             arr_uno.push(4)
    //             }
                
    //         }
    //     }
    //     // 5
    //     else if (res[0] == 5){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 5){
    //             if(tabla_uno.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_uno.children[5].innerText = 5
    //             arr_uno.push(5)
    //             }
                
    //         }
    //     }
    //     // 6
    //     else if (res[0] == 6){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 6){
    //             if(tabla_uno.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                 tabla_uno.children[6].innerText = 6
    //             arr_uno.push(6)
    //             }
                
    //         }
    //     }
    //     if(cont %2 == 0){
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
    //     }
    //     else{
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
    //     }





















//ELSE
    //     cont++
    //     let res = combo.map((elm)=> elm)
    // res.sort()
    // contador_ronda = 0
    // combo.length = 0;
    // // COMBOS
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
    // // GENERALA DOBLE
    // if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined) && (tabla_dos.children[10].innerText == 50)){
    //       if(tabla_dos.children[11].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes la generala doble",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una generala doble",
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
    //        tabla_dos.children[11].innerText = 100
    //     arr_dos.push(100)
    //     }
    //   }
    //   // GENERALA
    // else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[1] == res[4]) && (res[0] != undefined)){
    //       if(tabla_dos.children[10].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes la generala",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //        Toastify({
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
    //        tabla_dos.children[10].innerText = 50
    //     arr_dos.push(50)
    //     }
        
    // }
    //     //4 NUMEROS
    //     else if ((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined) && (tabla_dos.children[9].innerText != "") ){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 20){
    //             if(tabla_dos.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_dos.children[5].innerText = 20
    //             arr_dos.push(20)
    //             }
    //         }
    //         else if (total_turno == 24){
    //             if(tabla_dos.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                 tabla_dos.children[6].innerText = 24
    //             arr_dos.push(24)
    //             }
                
    //         }
    //         else if (total_turno == 16){
    //             if(tabla_dos.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_dos.children[4].innerText = 16
    //             arr_dos.push(16)
    //             }
                
    //         }
    //         else if (total_turno == 12){
    //             if(tabla_dos.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_dos.children[3].innerText = 12
    //            arr_dos.push(12)
    //             }
               
    //         }
    //         else if (total_turno == 8){
    //             if(tabla_dos.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                 tabla_dos.children[2].innerText = 8
    //             arr_dos.push(8)
    //             }
                
    //         }
    //         else if (total_turno == 4){
    //             if(tabla_dos.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //                tabla_dos.children[1].innerText = 4
    //             arr_dos.push(4)
    //             }
                
    //         }
    // }
    // // POKER
    // else if((res[0] == res[1]) && (res[1] == res[2]) && (res[1] == res[3]) && (res[0] != undefined)){
    //       if(tabla_dos.children[9].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes poker",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //        Toastify({
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
    //        tabla_dos.children[9].innerText = 40
    //     arr_dos.push(40)
    //     }
        
    // }
    // // FULL
    // else if((res[0] == res[1]) && (res[1]== res[2]) && (res[3] == res[4]) && (res[3] != undefined) || (res[0] == res[1]) && (res[2]== res[3]) && (res[3] == res[4]) && (res[3] != undefined)){
    //       if(tabla_dos.children[9].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes full",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
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
    //        tabla_dos.children[8].innerText = 30
    //     arr_dos.push(30)
    //     }
        
    // }
    // // ESCALERA 1
    // else if ((res[0] == 1) && (res[1] == 2) && (res[2] == 3) && (res[3] == 4) && (res[4] == 5)) {
        
    //       if(tabla_dos.children[7].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes escalera",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //        Toastify({
    //         text: "Hiciste una escalera",
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
    //        tabla_dos.children[7].innerText = 20
    //     arr_dos.push(20)
    //     }
        
    // }
    // // ESCALERA 2
    // else if ((res[0] == 2) && (res[1] == 3) && (res[2] == 4) && (res[3] == 5) && (res[4] == 6)) {
        
    //       if(tabla_dos.children[7].innerText != ""){
    //         --cont
    //         Toastify({
    //             text: "Ya tenes escalera",
    //             duration: 3000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "bottom", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "linear-gradient(to right, #f14141, #7b0808)",
    //             },
    //           }).showToast();
    //     }
    //     else{
    //         Toastify({
    //         text: "Hiciste una escalera",
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
    //        tabla_dos.children[7].innerText = 20
    //     arr_dos.push(20)
    //     }
        
    // }
    // // suma de numeros para meter en la tabla
    // // 3 NUMEROS
    // else if ((res[0]) == res[1] && (res[1] == res[2])){
    //     let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //     if(total_turno == 15){
    //         if(tabla_dos.children[5].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[5].innerText = 15
    //         arr_dos.push(15)
    //         }
    //     }
    //     else if (total_turno == 18){
    //         if(tabla_dos.children[6].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[6].innerText = 18
    //         arr_dos.push(18)
    //         }
            
    //     }
    //     else if (total_turno == 12){
    //         if(tabla_dos.children[4].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[4].innerText = 12
    //         arr_dos.push(12)
    //         }
            
    //     }
    //     else if (total_turno == 9){
    //         if(tabla_dos.children[3].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[3].innerText = 9
    //        arr_dos.push(9)
    //         }
           
    //     }
    //     else if (total_turno == 6){
    //         if(tabla_dos.children[2].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[2].innerText = 6
    //         arr_dos.push(6)
    //         }
            
    //     }
    //     else if (total_turno == 3){
    //         if(tabla_dos.children[1].innerText != ""){
    //             --cont
    //             Toastify({
    //                 text: "Ya tenes este numero seleccione otro o borre un numero",
    //                 duration: 3000,
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "bottom", // `top` or `bottom`
    //                 position: "center", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                   background: "linear-gradient(to right, #f14141, #7b0808)",
    //                 },
    //               }).showToast();
    //         }
    //         else{
    //         tabla_dos.children[1].innerText = 3
    //         arr_dos.push(3)
    //         }
    //     }
    // }
    // // 2 NUMEROS
    //     else if (res[0] == res[1]){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 10){
    //             if(tabla_dos.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[5].innerText = 10
    //             arr_dos.push(10)
    //             }
                
    //         }
    //         else if (total_turno == 12){
    //             if(tabla_dos.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[6].innerText = 12
    //             arr_dos.push(12)
    //             }
                
    //         }
    //         else if (total_turno == 8){
    //             if(tabla_dos.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[4].innerText = 8
    //             arr_dos.push(8)
    //             }
                
    //         }
    //         else if (total_turno == 6){
    //             if(tabla_dos.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[3].innerText = 6
    //             arr_dos.push(6)
    //             }
                
    //         }
    //         else if (total_turno == 4){
    //             if(tabla_dos.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[2].innerText = 4
    //             arr_dos.push(4)
    //             }
    //         }
    //         else if (total_turno == 2){
    //             if(tabla_dos.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[1].innerText = 2
    //             arr_dos.push(2)
    //             }
                
    //         }
    //     }
    //     // 1 
    //     else if (res[0] == 1){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 1){
    //             if(tabla_dos.children[1].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[1].innerText = 1
    //             arr_dos.push(1)
    //             }
                
    //         }
    //     }
    //     // 2
    //     else if (res[0] == 2){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 2){
    //             if(tabla_dos.children[2].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[2].innerText = 2
    //             arr_dos.push(2)
    //             }
                
    //         }
    //     }
    //     // 3
    //     else if (res[0] == 3){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 3){
    //             if(tabla_dos.children[3].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[3].innerText = 3
    //             arr_dos.push(3)
    //             }
                
    //         }
    //     }
    //     // 4
    //     else if (res[0] == 4){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 4){
    //             if(tabla_dos.children[4].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[4].innerText = 4
    //             arr_dos.push(4)
    //             }
                
    //         }
    //     }
    //     // 5
    //     else if (res[0] == 5){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if(total_turno == 5){
    //             if(tabla_dos.children[5].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[5].innerText = 5
    //             arr_dos.push(5)
    //             }
                
    //         }
    //     }
    //     // 6
    //     else if (res[0] == 6){
    //         let total_turno = res.reduce((acc,elm ) => acc + elm, 0)
    //         if (total_turno == 6){
    //             if(tabla_dos.children[6].innerText != ""){
    //                 --cont
    //                 Toastify({
    //                     text: "Ya tenes este numero seleccione otro o borre un numero",
    //                     duration: 3000,
    //                     newWindow: true,
    //                     close: true,
    //                     gravity: "bottom", // `top` or `bottom`
    //                     position: "center", // `left`, `center` or `right`
    //                     stopOnFocus: true, // Prevents dismissing of toast on hover
    //                     style: {
    //                       background: "linear-gradient(to right, #f14141, #7b0808)",
    //                     },
    //                   }).showToast();
    //             }
    //             else{
    //             tabla_dos.children[6].innerText = 6
    //             arr_dos.push(6)
    //             }
                
    //         }
    //     }
    //     if(cont %2 == 0){
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
    //     }
    //     else{
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
    //     }






















      //   else {
  //     tabla_dos.children[n].innerText = "X"
      
  //     ++cont
  //           Toastify({
  //    text: "te borraste el casillero " + `${n}` + " turno de " + j_uno.innerText,
  //    duration: 3000,
  //    newWindow: true,
  //    close: true,
  //    gravity: "top", // `top` or `bottom`
  //    position: "right", // `left`, `center` or `right`
  //    stopOnFocus: true, // Prevents dismissing of toast on hover
  //    style: {
  //        color: "black",
  //        width: "10%",
  //        height: "10%",
  //      background: "linear-gradient(to right, #f700ff, #78cdff)",
  //    },
  //  }).showToast(); 
  //   }



    // }
      //   if(cont == 22){
      //       let th_total = document.createElement("th")
      //       th_total.textContent = "total"
      //       numeros_tabla.append(th_total)
      //       let th_uno = document.createElement("th")
      //       th_uno.textContent = total_jugadores(arr_uno)
      //       tabla_uno.append(th_uno)
      //       let th_dos = document.createElement("th")
      //       th_dos.textContent = total_jugadores(arr_dos)
      //       tabla_dos.append(th_dos)
      //       if (total_jugadores(arr_dos) > total_jugadores(arr_uno)){
      //           Swal.fire("Felicidades " + `${j_dos.textContent}` + " ganaste");
      //           let btn_reset = document.createElement("button")
      //           btn_reset.textContent = "volver a jugar"
      //           btn_turno.replaceWith(btn_reset)
      //           btn_reset.addEventListener('click',()=>{
      //               resetear()
      //               btn_reset.replaceWith(btn_turno)
      //           })
      //       }
      //       else if (total_jugadores(arr_dos) == total_jugadores(arr_uno)){
      //           Swal.fire("Empataron");
      //           let btn_reset = document.createElement("button")
      //           btn_reset.textContent = "volver a jugar"
      //           btn_turno.replaceWith(btn_reset)
      //           btn_reset.addEventListener('click',()=>{
      //               resetear()
      //               btn_reset.replaceWith(btn_turno)
      //           })
      //       }
      //       else{
      //           Swal.fire("Felicidades " + `${j_uno.textContent}` + " ganaste");
      //           let btn_reset = document.createElement("button")
      //           btn_reset.textContent = "volver a jugar"
      //           btn_turno.replaceWith(btn_reset)
      //           btn_reset.addEventListener('click',()=>{
      //               resetear()
      //               btn_reset.replaceWith(btn_turno)
      //           })
      //       }
      //   }
      // })