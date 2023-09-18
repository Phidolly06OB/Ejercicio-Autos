import Router from 'express'
import { borrar, getAlquileres, updAlqui } from '../controllers/alquileres.controller.js'

const  router = Router()

router.get('/', getAlquileres)

router.delete('/:id', borrar)

router.path('/:id', updAlqui)

export default router