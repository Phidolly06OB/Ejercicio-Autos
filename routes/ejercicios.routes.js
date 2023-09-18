import Router, { json } from 'express'

import Automovil from '../models/automoviles.js'
import Empleados from '../models/empleados.js'
import Cliente from '../models/clientes.js'
import Alquiler from '../models/alquileres.js'
import Reserva from '../models/reservas.js'

const router = Router()



router.get('/ejercicio2', async (req, res) =>{
    try {
        
        const result = await Cliente.find()

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio3', async (req, res) =>{
    try {

        const result = await Automovil.find({"disponibilidad": {$eq: "Disponible"}})

        res.json(result)
    } catch (error) {
        console.log(error);
    }
    
})


router.get('/ejercicio4', async (req, res) => {
    try {
        
        const result = await Alquiler.aggregate([
            {
              $match: { estado: "Activo" } 
            },
            {
              $lookup: {
                from: "clientes", 
                localField: "id_Cliente",
                foreignField: "_id",
                as: "cliente" 
              }
            },
            {//uniwnd es para destructurar el resultado
              $unwind: "$cliente" 
            },
            {
              $project: {
                _id: 1,
                fechaInicio: 1,
                fechaFin: 1,
                estado: 1,
                cliente: { _id: 1, nombre: 1, documento: 1, telefono: 1, correo: 1 } 
              }
            }
          ]);

          res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio5', async (req, res) =>{
    try {
        
        const result = await Reserva.aggregate([
            {
              $match: { estadoReserva: "Pendiente" }
            },
            {
              $lookup: {
                from: "clientes",
                localField: "id_Cliente",
                foreignField: "_id",
                as: "cliente"
              }
            },
            {
              $lookup: {
                from: "automoviles",
                localField: "id_Automovil",
                foreignField: "_id",
                as: "automovil"
              }
            },
            {
              $unwind: "$cliente"
            },
            {
              $unwind: "$automovil"
            },
            {
              $project: {
                _id: 1,
                fechaInicio: 1,
                fechaFin: 1,
                estadoReserva: 1,
                cliente: { _id: 1, nombre: 1, documento: 1, telefono: 1, correo: 1 },
                automovil: { _id: 1, marca: 1, modelo: 1, capacidad: 1, costoDia: 1 }
              }
            }
          ]);

          res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get("/ejercicio6/:id", async(req,res) =>{
    try {
        
        const result = await Alquiler.findOne({_id:req.params.id})

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio7', async (req, res) =>{
    try {
        
        const result = await Empleados.find({"cargo": {$eq: "Vendedor"}})

        res.json(result)
    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio8', async (req, res) =>{
    try {
        
        const result = await Automovil.aggregate([
            {
              $match: { disponibilidad: "Disponible" }
            },
            {
              $group: {
                _id: "$sucursal",
                cantidadAutomoviles: { $sum: 1 }
              }
            },
            {
              $lookup: {
                from: "sucursales",
                localField: "_id",
                foreignField: "_id",
                as: "sucursalInfo"
              }
            },
            {
              $project: {
                _id: 0,
                sucursalNombre: "$sucursalInfo.nombre",
                cantidadAutomoviles: 1
              }
            }
          ])

          res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio10/:id', async (req, res) =>{
    try {

        const result = await Cliente.findOne({_id:req.params.id})

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio11', async (req, res) =>{
    try {
        
        const result = await Automovil.find({"capacidad": {$gt: 5}})

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio12', async(req, res) =>{
  try {
    
    const result = await Alquiler.find({"fechaInicio": {$eq: "2023-07-05T05:00:00.000+00:00"}})

    res.json(result)

  } catch (error) {
    console.log(error);
  }
})

router.get('/ejercicio14', async(req, res) =>{
  try {
    
    const result = await Empleados.find({"cargo": {$eq: "Gerente"}})
    
    res.json(result)

  } catch (error) {
    console.log(error);
  }
})

router.get('/ejercicio15', async (req, res) =>{
  try {
    
    const result = await Cliente.aggregate([
      {
        $lookup: {
          from: "alquileres", 
          localField: "_id",
          foreignField: "id_Cliente",
          as: "alquileres"
        }
      },
      {
        $match: {
          "alquileres": { $exists: true, $ne: [] } 
        }
      },
      {
        $project: {
          _id: 1,
          nombre: 1,
          documento: 1,
          telefono: 1,
          correo: 1
        }
      }
    ]);

    res.json(result)

  } catch (error) {
    console.log(error);
  }
})

router.get('/ejercicio16', async (req, res) =>{
    try {
        
        const result = await Automovil.find().select({"_id": 0, "marca": 1, "modelo": 1}).sort({"marca": 1})

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio18', async (req, res) =>{
  try {
    
    const result = await Alquiler.find()

    res.json({
      msg: `La cantidad de alquileres registrados es : ${result.length}`
    })

  } catch (error) {
    console.log(error);
  }
})

router.get('/ejercicio19', async (req, res) =>{
    try {
        
        const result = await Automovil.find({
            $and:[
                {"capacidad": {$gt: 5}},
                {"disponibilidad": "Disponible"}
            ]
        })

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio20', async (req, res) =>{
  try {
    
    const result = await Reserva.aggregate([
      {
        $lookup: {
          from: "clientes", 
          localField: "id_Cliente",
          foreignField: "_id",
          as: "cliente"
        }
      },
      {
        $unwind: "$cliente" 
      },
      {
        $project: {
          reserva_id: "$_id",
          _id: "$cliente._id",
          nombre: "$cliente.nombre",
          documento: "$cliente.documento",
          telefono: "$cliente.telefono",
          correo: "$cliente.correo"
        }
      }
    ]);

    res.json(result)

  } catch (error) {
    console.log(error);
  }
})


router.get("/ejercicio21", async (req, res) =>{
  try {
    
    const result = await Alquiler.find({"fechaInicio": {$gte: new Date('2023-07-05'),
    $lte: new Date('2023-07-10')}})

    res.json(result)

  } catch (error) {
    console.log(error);
  }
})

export default router