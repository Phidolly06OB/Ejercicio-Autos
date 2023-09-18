import cors from "cors"
import express  from "express"
import conectarDB from "../config/dataBase.js"

import routerEmpleados from "../routes/empleados.routes.js"
import routerAutomovil from '../routes/automoviles.routes.js'
import routerSucursal from '../routes/sucursal.routes.js'
import routerEjercico from '../routes/ejercicios.routes.js'
import routerCliente from '../routes/cliente.routes.js'
import routerAlquiler from '../routes/alquileres.routes.js'
import routerReservas from '../routes/reservas.routes.js'
import routerEntregas from '../routes/entregaAuto.routes.js'

class Server{
 
    constructor(){
        this.app = express();
        this.mongoDB();
        this.port = process.env.PORT

        this.empleadopatch = "/empleado"
        this.autopatch = "/auto"
        this.sucursalpatch = '/sucursal'
        this.ejerciciospatch = '/ejercicios'
        this.clientepatch = "/cliente"
        this.alquierpatch = "/alquiler"
        this.reservapatch = "/reserva"
        this.entregapatch = "/entrega"

        this.middlewar()
        this.routes()
    }

    async mongoDB(){
        await conectarDB()
    }

    middlewar(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.empleadopatch, routerEmpleados)
        this.app.use(this.autopatch, routerAutomovil)
        this.app.use(this.sucursalpatch, routerSucursal)
        this.app.use(this.ejerciciospatch, routerEjercico)
        this.app.use(this.clientepatch, routerCliente)
        this.app.use(this.alquierpatch, routerAlquiler)
        this.app.use(this.reservapatch, routerReservas)
        this.app.use(this.entregapatch, routerEntregas)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listen on port ${this.port}`);
        })
    }

}

export default Server