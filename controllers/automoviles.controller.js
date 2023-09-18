import Automovil from "../models/automoviles.js";

const getAutomoviles = async (req, res)=>{
    try {
        const automoviles = await Automovil.find()

        res.json(automoviles)
    } catch (error) {
        console.log(error);
    }
}

const newAutomovil = async (req, res) =>{
    try {
        const nuevoAuto = await new Automovil(req.body)
        nuevoAuto.save();

        res.json(nuevoAuto)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Automovil.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updAuto = async (req, res) =>{
    try {
        const updCarro = await Automovil.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updCarro);
    } catch (error) {
        console.log(error);
    }
}

export {
    getAutomoviles,
    newAutomovil,
    borrar,
    updAuto
}