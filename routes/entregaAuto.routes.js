import Router from 'express'
import { borrar, getEntregas, newEntrega, updEntrega } from '../controllers/entregaAuto.controller.js'

const router = Router()

router.get('/', getEntregas)

router.post('/', newEntrega)

router.delete('/:id', borrar)

router.patch('/:id', updEntrega)

export default router