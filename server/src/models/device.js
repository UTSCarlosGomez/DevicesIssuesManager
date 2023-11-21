/* Importar mongoose para definir el esquema y el modelo */
import mongoose from 'mongoose'
/* Definir el esquima para los dispositivos */
const deviceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  room: {
    id: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  }
}, { versionKey: false })// La opción { versionKey: false } evita la inclusión del campo "__v" en los documentos

// Crear el modelo "Device" basado en el esquema
const Device = mongoose.model('Device', deviceSchema);

// Exportar el modelo para su uso en otros archivos
export default Device;