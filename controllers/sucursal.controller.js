import Sucursal from "../models/sucursal.js";

const getSucursal = async (req, res)=>{
    try {
        const sucursales = await Sucursal.find()

        res.json(sucursales)
    } catch (error) {
        console.log(error);
    }
}

const newSucursal = async (req, res) =>{
    try {
        const nuevaSucursal = await new Sucursal(req.body)
        nuevaSucursal.save();

        res.json(nuevaSucursal)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Sucursal.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updSucursal = async (req, res) =>{
    try {
        const updsucur = await Sucursal.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updsucur);
    } catch (error) {
        console.log(error);
    }
}


export {
    getSucursal,
    newSucursal,
    borrar,
    updSucursal
}