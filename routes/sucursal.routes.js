import Router from 'express'
import { borrar, getSucursal, newSucursal, updSucursal } from '../controllers/sucursal.controller.js'

const router = Router()

router.get('/', getSucursal)

router.post('/', newSucursal)

router.patch('/:id', updSucursal)

router.delete('/:id', borrar)

export default router