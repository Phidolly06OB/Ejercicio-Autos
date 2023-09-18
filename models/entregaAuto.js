import mongoose from "mongoose";

const EntregaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    documento:{
        type:Number,
        required:true,
        trim:true,
    },
    id_Alquiler:{
        type:mongoose.Schema.ObjectId,
        required:true,
        trim:true
    }
})


const EntregaAuto = mongoose.model('entregaAuto', EntregaSchema)

export default EntregaAuto