import Alquiler from "../models/alquileres.js";
import Automovil from "../models/automoviles.js";
import EntregaAuto from "../models/entregaAuto.js";

const getEntregas = async (req, res)=>{
    try {
        const entrega = await EntregaAuto.find()

        res.json(entrega)
    } catch (error) {
        console.log(error);
    }
}

const newEntrega = async (req, res) =>{
    try {

        const {id_Alquiler} = req.body

        const {estado, id_Automovil} = await Alquiler.findOne({_id:id_Alquiler})

        if(estado === "Activo"){
            await Alquiler.findOneAndUpdate({_id: id_Alquiler}, {$set: {estado: 'Finalizado'}}, { returnOriginal: false })

            await Automovil.findOneAndUpdate({_id:id_Automovil}, {$set: {disponibilidad: 'Disponible'}}, { returnOriginal: false })

        }else{
            res.json({
                msg: "El alquiler no se encuentra activo"
            })
        }

        const nuevaEntrega = await new EntregaAuto(req.body)
        nuevaEntrega.save();

        res.json({
            nuevaEntrega
        })
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await EntregaAuto.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updEntrega = async (req, res) =>{
    try {
        const updEntrega = await EntregaAuto.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updEntrega);
    } catch (error) {
        console.log(error);
    }
}

export {
    getEntregas,
    newEntrega,
    borrar,
    updEntrega
}