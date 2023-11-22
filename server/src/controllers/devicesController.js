/* Este archivo devicesController.js contiene controladores que manejan las operaciones CRUD  */
/* Importacion de modelos necesarios */
import Device from '../models/device.js'
import Room from '../models/room.js'
/* Controlador para crear un nuevo dispositivo */
const createDevice = async (req, res) => {
    const deviceData = req.body
     /* Buscar la sala asociada al dispositivo */
    const room = await Room.findById(deviceData.roomId).exec()
    /* Crear un nuevo dispositivo utilizando los datos proporcionados */
    const device = new Device({
        code: deviceData.code,
        brand: deviceData.brand,    
        description: deviceData.description,
        room: {
            id: room._id,
            name: room.name
        }
    })

    try {
        await device.save()// Guardar el dispositivo en la base de datos
        /* Enviar una respuesta exitosa junto con el dispositivo creado */
        return res.status(201).json(device)
    } catch (err) {
        /* Enviar una respuesta de error si ocurre algún problema durante la creación */
        return res.status(400).json({ message: err.message });
    }
};
/*  Controlador para obtener un dispositivo por su ID*/
const getDevice = async (req, res) => {
    const { id } = req.params

    try {
        const device = await Device.findById(id).exec()// Buscar el dispositivo por su ID en la base de datos
        /* Buscar el dispositivo por su ID en la base de datos */
        if (device) {
            return res.json(device)// Enviar el dispositivo como respuesta
        }
        /*  Enviar el dispositivo como respuesta */
        return res.status(404).json({ message: 'Device not found' })
        /* Enviar una respuesta de error en caso de algún problema */
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}
/* Controlador para obtener todos los equipos */
const getDevices = async (req, res) => {
    try {
        /* Obtener todo los dispositivos de la base de datos */
        const devices = await Device.find()
        /* Enviar la lista de dispositivos */
        return res.json(devices)
    } catch (err) {
        /* Enviar una respuesta de error en caso de algun problema */
        return res.status(500).json({ message: err.message })
    }
}
/* Actualizar equipo */
const updateDevice = async (req, res) => {
    const { id } = req.params
    const deviceData = req.body

    try {
        /* Busca el dispositivo por su ID en la DB */
        const device = await Device.findById(id).exec()
        /* Verificar si encuentra el dispositivo */
        if (device) {
            /* Actualizar la informacion */
            device.code = deviceData.code
            device.brand = deviceData.brand
            device.description = deviceData.description
            /* Guarda los cambios en la DB */
            await device.save()
            /* Enviar el equipo actualizado */
            return res.json(device)
        }
        /* Respuesta si el equipo no se encuentra */
        return res.status(404).json({ message: 'Device not found' })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}
/* funcion para eliminar un equipo por su ID */
const deleteDevice = async (req, res) => {
    const { id } = req.params

    try {
        /* Buscar el equipo en la DB */
        const device = await Device.findById(id).exec()
        /* verifica si el equipo fue encontrado */
        if (device) {
            /* Elimina el equipo de la DB */
            await device.remove()
            /* Mensaje que elimino el equipo */
            return res.json({ message: 'Device removed' })
        }
        /* Mensaje si no se encuentra el equipo */
        return res.status(404).json({ message: 'Device not found' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
/* Exportar los controladores para ser usados en el resto del codigo */
export { createDevice, getDevice, getDevices, updateDevice, deleteDevice };