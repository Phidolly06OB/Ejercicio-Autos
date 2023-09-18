import Alquiler from "../models/alquileres.js";

const getAlquileres = async (req, res)=>{
    try {
        const alquileres = await Alquiler.find()

        res.json(alquileres)
    } catch (error) {
        console.log(error);
    }
}

// const newAlquiler = async (req, res) =>{
//     try {
//         const nuevoAlqui = await new Alquiler(req.body)
//         nuevoAlqui.save();

//         res.json(nuevoAlqui)
//     } catch (error) {
//         console.log(error);
//     }
// }

const borrar = async (req, res) =>{
    try {
        await Alquiler.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updAlqui= async (req, res) =>{
    try {
        const updAlquier = await Alquiler.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updAlquier);
    } catch (error) {
        console.log(error);
    }
}

export {
    getAlquileres,
    borrar,
    updAlqui
}
