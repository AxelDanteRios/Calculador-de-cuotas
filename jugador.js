class Comprador{
    constructor(nombre,pass){
        this.nombre = nombre
        this.pass = pass
    }
}   

let usuario = [

]
localStorage.setItem("usuario", JSON.stringify(usuario))














// para mostrarla actualizada un for o un while




// Tipico proyecto relativamente sencillo! No hay que olvidarse de las funciones basicas

// - Agregar tareas
// - Eliminar tareas realizadas
// - Poder ver en todo momento una lista de las tareas (de forma actualizada cada vez que se agregan o quitan tareas)
// - Se puede complejizar si
//     - Agregan una parte para ver el historial de tareas
//     - Agregar fecha de creacion a las tareas (date clase de funcion de orden superior 2)
//     - Agregar nivel de urgencia para las tareas y poder clasificar o filtrar por tipo.