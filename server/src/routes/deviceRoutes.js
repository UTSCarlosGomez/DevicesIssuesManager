import { Router } from 'express';
import { getDevices, getDevice, createDevice, updateDevice, deleteDevice } from '../controllers/devicesController.js'

const router = Router();

router.get('/', getDevices);//Obtiene todos los equipos
router.get('/:id', getDevice);//Obtiene el equipo por el ID
router.post('/', createDevice);//Crea un nuevo equipo
router.put('/:id', updateDevice);//Actualiza el equipo por su ID
router.delete('/:id', deleteDevice);//Elimina un equipo por su ID

export default router