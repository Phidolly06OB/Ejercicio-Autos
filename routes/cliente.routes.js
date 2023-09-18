import Router from 'express'
import { borrar, getCliente, newClient, updClient } from '../controllers/cliente.controller.js'

const router =  Router()

router.get('/', getCliente)

router.post('/', newClient)

router.delete('/:id', borrar)

router.patch('/:id', updClient)


export default router