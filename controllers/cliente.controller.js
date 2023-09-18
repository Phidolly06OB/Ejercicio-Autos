import Cliente from "../models/clientes.js";

const getCliente = async (req, res)=>{
    try {
        const clientes = await Cliente.find()

        res.json(clientes)
    } catch (error) {
        console.log(error);
    }
}

const newClient = async (req, res) =>{
    try {
        const nuevoClient = await new Cliente(req.body)
        nuevoClient.save();

        res.json(nuevoClient)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Cliente.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updClient = async (req, res) =>{
    try {
        const updCient = await Cliente.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updCient);
    } catch (error) {
        console.log(error);
    }
}

export {
    getCliente,
    newClient,
    borrar,
    updClient
}