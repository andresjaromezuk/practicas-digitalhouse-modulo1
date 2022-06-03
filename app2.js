let funcionDeTareas = require ("./funcionesDeTareas")


const ejecutar = process.argv[2]

switch(ejecutar){

    case "listar":
        funcionDeTareas.listarTareas()
        console.log("---------------------------------------------------")
    break;

    case "crear":
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        funcionDeTareas.guardarTarea(nuevaTarea);
    break;

    case "filtrar": 
        let estado = process.argv[3];
        let ArrayFiltrado = funcionDeTareas.filtrarPorEstado(estado)
        ArrayFiltrado.forEach((elemento, indice) => {
            console.log((indice + 1) + ". " + elemento.titulo + " está " + elemento.estado)
        })
    break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        console.log("---------------------------------------------------")
    break;

    default:
        console.log ("No entiendo qué quieres hacer.")
        console.log("---------------------------------------------------")
}

