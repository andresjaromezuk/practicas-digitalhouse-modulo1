const fs = require("fs")

const datos = fs.readFileSync("./tareas.json", "utf-8")

let tareas = JSON.parse (datos)

function recorrerTareas () {
    for (let i= 0; i < tareas.length; i++) {
         console.log (tareas[i].titulo + " está " + tareas[i].estado)
}
}


// FIN DE PRIMERA PARTE

const ejecutar = process.argv[2]

switch(ejecutar){

    case "listar":
        recorrerTareas() 
    break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
    break;

    default:
        console.log ("No entiendo qué quieres hacer.")
}

// FIN DE LA SEGUNDA PARTE


