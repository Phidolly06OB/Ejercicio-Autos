import Empleados from "../models/empleados.js";

const getEmplados = async (req, res)=>{
    try {
        const empleados = await Empleados.find()

        res.json(empleados)
    } catch (error) {
        console.log(error);
    }
}

const newEmpleado = async (req, res) =>{
    try {
        const nuevoEmpleado = await new Empleados(req.body)
        nuevoEmpleado.save();

        res.json(nuevoEmpleado)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Empleados.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const upEmpl = async (req, res) =>{
    try {
        const updEmpl = await Empleados.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updEmpl);
    } catch (error) {
        console.log(error);
    }
}

export {
    getEmplados,
    newEmpleado,
    borrar,
    upEmpl,
}