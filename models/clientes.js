import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre:{
        type:String,
        reuired:true,
        trim: true
    },
    documento:{
        type:Number,
        required:true,
        trim: true,
        unique: true
    },
    telefono:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    correo:{
        type:String,
        required: true,
        trim:true
    }

})

const Cliente = mongoose.model('cliente', clienteSchema)

export default Cliente