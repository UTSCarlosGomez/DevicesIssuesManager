// Importar mongoose para definir el esquema y el modelo
import mongoose from 'mongoose';

// Definir el esquema para los problemas (issues)
const issueSchema = new mongoose.Schema({
  creator: {
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
  },
  device: {
    id: {
      type: String,
      required: true,
      trim: true
    },
    code: {
      type: String,
      required: true,
      trim: true
    }
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  deviceStatus: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  notes: [{
    content: {
      type: String,
      required: true,
      trim: true
    },
    creatorName: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  issuesManagement: [
    {
      responsible: {
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
      },
      description: {
        type: String,
        trim: true
      },
      startDate: {
        type: Date,
        default: Date.now
      },
      endDate: {
        type: Date
      },
      usedObjects: {
        type: String
      }
    }
  ]
}, { versionKey: false }); // La opción { versionKey: false } evita la inclusión del campo "__v" en los documentos

// Crear el modelo "Issue" basado en el esquema
const Issue = mongoose.model('Issue', issueSchema);

// Exportar el modelo para su uso en otros archivos
export default Issue;
