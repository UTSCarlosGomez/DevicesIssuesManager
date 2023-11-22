/* Importa mongoose */
import mongoose from 'mongoose'
/* Define el esquema para las salas */
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
}, { versionKey: false })// La opción { versionKey: false } evita la inclusión del campo "__v" en los documentos
/* Crea el modelo room basado en el esquema */
const Room = mongoose.model('Room', roomSchema)
/* Exporta el modelo room */
export default Room
