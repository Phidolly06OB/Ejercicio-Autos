import mongoose from "mongoose";

const sucursalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type:String,
        reuqired: true,
        trim: true
    },
    ciudad: {
        type:String,
        required: true,
        trim:true
    },
    telefono:{
        type:String,
        reuqired:true,
        trim:true
    }
})

const Sucursal = mongoose.model('sucursale', sucursalSchema)

export default Sucursal