const fs = require("fs")

funcionesDeTareas = {

    archivo: "./tareas.json",

    leerArchivo: function (){
        let datos = fs.readFileSync(this.archivo, "utf-8")
        return JSON.parse(datos)
    },

    listarTareas: function(){

        let tareas = this.leerArchivo()

        tareas.forEach (function (tareas, indice) {
            console.log ((indice + 1 ) + ". " + tareas.titulo + " -- " + tareas.estado )
        } )
        
   },

   escribirJSON: function (arrayTareas){
    let tareasJSON= JSON.stringify(arrayTareas)
    fs.writeFileSync('./tareas.json',tareasJSON)
    
   },

   guardarTarea: function (nuevaTarea){
        let tareasActuales = this.leerArchivo();
        tareasActuales.push(nuevaTarea)
        this.escribirJSON(tareasActuales)
    console.log ("Creaste la nueva tarea.")
   },

   filtrarPorEstado: function (estado){
    let tareas = this.leerArchivo()
    return tareas.filter (function (tareas){
        return tareas.estado === estado
    })
   }

    }


module.exports = funcionesDeTareas
