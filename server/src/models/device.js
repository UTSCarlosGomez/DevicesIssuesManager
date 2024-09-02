import mongoose from 'mongoose';

// Definir el esquema para los dispositivos
const deviceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true,
    unique: true
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
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    torre: {
      type: String,
      required: true,
      uppercase: true
    },
    piso: {
      type: Number,
      required: true
    },
    categoria: {
      type: String,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

// Middleware para generar el código automáticamente antes de guardar
deviceSchema.pre('validate', async function (next) {
  const device = this;
  
  // Solo generar código si es un nuevo documento
  if (device.isNew) {
    try {
      const lastDevice = await mongoose.model('Device').findOne().sort({ createdAt: -1 });
      const lastCode = lastDevice ? parseInt(lastDevice.code.replace('DEV', '')) : 0;
      device.code = `DEV${String(lastCode + 1).padStart(3, '0')}`;
    } catch (error) {
      return next(error);
    }
  }

  next();
});

// Crear el modelo "Device" basado en el esquema
const Device = mongoose.model('Device', deviceSchema);

export default Device;
