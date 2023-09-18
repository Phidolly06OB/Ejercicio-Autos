import mongoose from "mongoose";

const alquilerSchema = mongoose.Schema({
    fechaInicio: {
        type: Date,
        required: true,
        trim: true
    },
    fechaFin:{
        type:Date,
        required:true,
        trim:true
    },
    estado:{
        type:String,
        required: true,
        enum: ['Activo', 'Finalizado', 'Pendiente']
    },
    id_Cliente:{
        type:mongoose.Schema.ObjectId,
        required: true,
        trim: true
    },
    id_Automovil:{
        type: mongoose.Schema.ObjectId,
        rquired:true,
        trim:true
    }

})


const Alquiler = mongoose.model('alquilere', alquilerSchema)

export default Alquiler