import mongoose from "mongoose";

const carroSchema = mongoose.Schema({
    marca: {
        type:String,
        required: true,
        trim: true
    },
    modelo:{
        type: String,
        required:true,
        trim: true
    },
    capacidad:{
        type: Number,
        required: true,
        trim:true
    },
    costoDia:{
        type: Number,
        rquiered: true,
        trim: true
    },
    sucursal:{
        type: mongoose.Schema.ObjectId,
        required: true,
        trim: true
    },
    disponibilidad:{
        type:String,
        required: true,
        enum: ['Disponible', 'No Disponible']
    },
    placa:{
        type:String,
        require:true,
        trim: true,
        unique:true
    }
})

const Automovil = mongoose.model('automovile', carroSchema)

export default Automovil