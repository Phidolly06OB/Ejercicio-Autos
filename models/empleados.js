import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:Number,
        required:true,
        trim:true
    },
    documento:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    cargo:{
        type:String,
        required: true,
        enum: ['Vendedor', 'Gerente', 'Asistente']
    }
})

const Empleados = mongoose.model("empleado", empleadosSchema)

export default Empleados