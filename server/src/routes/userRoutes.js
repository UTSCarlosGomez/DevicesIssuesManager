import { Router } from 'express'

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usersController.js'

const router = Router()

router.get('/', getUsers)//obtiene los usuarios
router.get('/:id', getUser)//obtiene el usuario por su ID
router.post('/', createUser)//crea un nuevo usuario
router.put('/:id', updateUser)//actualiza un usuario por su ID
router.delete('/:id', deleteUser)//elimina un usuario por su ID

export default router