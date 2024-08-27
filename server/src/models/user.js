/* Importar el mongoose */
import mongoose from 'mongoose'
/* Define el esquema para los usuarios */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
}, { versionKey: false })
/* Crea el modelo user basado en el esquema */
const User = mongoose.model('User', userSchema)
/* exporta el modelo */
export default User
