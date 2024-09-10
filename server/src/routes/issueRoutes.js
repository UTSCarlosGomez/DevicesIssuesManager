import { Router } from 'express'

import {
    getIssues, getIssue,
    createIssue, updateIssue,
    deleteIssue, addNote, editNote, deleteNote, addManagement
} from '../controllers/issuesController.js'

const router = Router()

router.get('/', getIssues)//obtiene todas las incidencias
router.get('/:id', getIssue)//obtiene las incidencias por su ID
router.post('/', createIssue)//crea una nueva incidencia
router.post('/:id/addNote', addNote)//agrega una nota a las incidencias por su ID
router.put('/:id/notes/:noteId', editNote); // Ruta para editar una nota
router.delete('/:id/notes/:noteId', deleteNote); // Ruta para eliminar una nota
router.post('/:id/addManagement', addManagement)//agrega una gestion a una incidencia
router.put('/:id', updateIssue)//Actualiza la incidencia por su ID
router.delete('/:id', deleteIssue)//Elimina una incidencia por su ID

export default router