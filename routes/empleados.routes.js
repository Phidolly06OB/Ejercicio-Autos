import Router from 'express'

const router = Router()

import { borrar, getEmplados, newEmpleado, upEmpl } from '../controllers/empleado.controller.js'

router.get('/', getEmplados)

router.post('/', newEmpleado)

router.delete('/:id', borrar)

router.patch('/:id', upEmpl)

export default router