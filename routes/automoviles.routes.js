import Router from 'express'
import { borrar, getAutomoviles, newAutomovil, updAuto } from '../controllers/automoviles.controller.js'

const router = Router()

router.get('/', getAutomoviles)

router.post('/', newAutomovil)

router.delete('/:id', borrar)

router.patch('/:id', updAuto)

export default router