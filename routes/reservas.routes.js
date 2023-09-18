import Router from 'express'
import { getReservas, newReserva } from '../controllers/reservas.controller.js'

const router = Router()

router.get('/', getReservas)

router.post('/', newReserva)

export default router