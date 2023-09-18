import Reserva from "../models/reservas.js";
import Alquiler from "../models/alquileres.js";
import Automovil from "../models/automoviles.js";

const getReservas = async (req, res)=>{
    try {
        const reservas = await Reserva.find()

        res.json(reservas)
    } catch (error) {
        console.log(error);
    }
}

const newReserva = async (req, res) =>{
    try {
        const {fechaInicio, fechaFin, estadoReserva, id_Automovil, id_Cliente} = req.body

        const carroDisponible = await Automovil.findOne({_id:id_Automovil})

        if(carroDisponible.disponibilidad === "Disponible"){
            
            await Automovil.findOneAndUpdate({_id: id_Automovil}, {$set: {disponibilidad:"No Disponible"}}, { returnOriginal: false })

        }else if(carroDisponible.disponibilidad === "No Disponible"){
            return res.json({
                msg: "El carro no se encuentra disponible"
            })
        }

        let estado

        if(estadoReserva === "Aprobado"){
            estado = "Activo"
        }else if(estadoReserva === 'Pendiente'){
            estado = estadoReserva
        }

        const nuevoAlquiler = await new Alquiler({fechaInicio, fechaFin, estado, id_Cliente, id_Automovil})
        nuevoAlquiler.save()

        const nuevoAuto = await new Reserva(req.body)
        nuevoAuto.save()

        res.json({
           nuevoAuto,
           nuevoAlquiler
        })
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Reserva.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updReseva = async (req, res) =>{
    try {
        const updReserva = await Reserva.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updReserva);
    } catch (error) {
        console.log(error);
    }
}

export {
    getReservas,
    newReserva,
    borrar,
    updReseva
}