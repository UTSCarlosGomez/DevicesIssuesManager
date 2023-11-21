// Importación del modelo Room
import Room from '../models/Room.js';

// Controlador para crear una nueva habitación
const createRoom = async (req, res) => {
  const roomData = req.body;

  // Crear una nueva instancia de Room utilizando los datos proporcionados
  const room = new Room({
    name: roomData.name
  });

  try {
    // Guardar la nueva habitación en la base de datos
    await room.save();

    // Enviar una respuesta exitosa junto con la habitación creada
    return res.status(201).json(room);
  } catch (err) {
    // Enviar una respuesta de error en caso de algún problema durante la creación
    return res.status(400).json({ message: err.message });
  }
};

// Controlador para obtener una habitación por su ID
const getRoom = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar la habitación por su ID en la base de datos
    const room = await Room.findById(id).exec();

    // Verificar si la habitación fue encontrada
    if (room) {
      // Enviar la habitación como respuesta
      return res.json(room);
    }

    // Enviar una respuesta de error si la habitación no fue encontrada
    return res.status(404).json({ message: 'Room not found' });
  } catch (err) {
    // Enviar una respuesta de error en caso de algún problema
    return res.status(400).json({ message: err.message });
  }
};

// Controlador para obtener todas las habitaciones
const getRooms = async (req, res) => {
  try {
    // Obtener todas las habitaciones de la base de datos
    const rooms = await Room.find();

    // Enviar la lista de habitaciones como respuesta
    return res.json(rooms);
  } catch (err) {
    // Enviar una respuesta de error en caso de algún problema
    return res.status(500).json({ message: err.message });
  }
};

// Controlador para actualizar la información de una habitación
const updateRoom = async (req, res) => {
  const { id } = req.params;
  const roomData = req.body;

  try {
    // Buscar la habitación por su ID en la base de datos
    const room = await Room.findById(id).exec();

    // Verificar si la habitación fue encontrada
    if (room) {
      // Actualizar la información de la habitación con los nuevos datos
      room.name = roomData.name;

      // Guardar los cambios en la base de datos
      await room.save();

      // Enviar la habitación actualizada como respuesta
      return res.json(room);
    }

    // Enviar una respuesta de error si la habitación no fue encontrada
    return res.status(404).json({ message: 'Room not found' });
  } catch (err) {
    // Enviar una respuesta de error en caso de algún problema
    return res.status(400).json({ message: err.message });
  }
};

// Controlador para eliminar una habitación por su ID
const deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar la habitación por su ID en la base de datos
    const room = await Room.findById(id).exec();

    // Verificar si la habitación fue encontrada
    if (room) {
      // Eliminar la habitación de la base de datos
      await room.deleteOne();

      // Enviar una respuesta indicando que la habitación fue eliminada
      return res.json({ message: 'Room removed' });
    }

    // Enviar una respuesta de error si la habitación no fue encontrada
    return res.status(404).json({ message: 'Room not found' });
  } catch (err) {
    // Enviar una respuesta de error en caso de algún problema
    return res.status(500).json({ message: err.message });
  }
};

// Exportar los controladores para su uso en otros archivos
export {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteRoom
};
