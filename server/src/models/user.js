/* Importar el mongoose */
import mongoose from 'mongoose'
/* Define el esquema para los usuarios */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  auth0_id: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
}, { versionKey: false })// La opción { versionKey: false } evita la inclusión del campo "__v" en los documentos
/* Crea el modelo user basado en el esquema */
const User = mongoose.model('User', userSchema)
/* exporta el modelo */
export default User
