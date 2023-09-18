import mongoose from "mongoose";

const reservaSchema = mongoose.Schema({
    fechaInicio: {
        type: Date,
        required:true,
        trim:true
    },
    fechaFin: {
        type: Date,
        required:true,
        trim:true
    },
    estadoReserva:{
        type:String,
        required:true,
        enum:['Pendiente', 'Aprobado']
    },
    id_Automovil:{
        type: mongoose.Schema.ObjectId,
        rquired:true,
        trim:true
    },
    id_Cliente:{
        type: mongoose.Schema.ObjectId,
        required: true,
        trim:true
    }

})

const  Reserva = mongoose.model('reserva', reservaSchema)

export default Reserva