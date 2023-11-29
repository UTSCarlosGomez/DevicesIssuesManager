import { Router } from 'express'

import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/roomsController.js'

const router = Router()

router.get('/', getRooms)//obtiene las salas
router.get('/:id', getRoom)//obtiene las salas por si ID
router.post('/', createRoom)//Crea una nueva sala
router.put('/:id', updateRoom)//Actualizar una sala por su ID
router.delete('/:id', deleteRoom)//Eliminar una sala por su ID

export default router