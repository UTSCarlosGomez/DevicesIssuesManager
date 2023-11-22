// Importación del modelo User
import User from '../models/user.js';

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
    const userData = req.body;

    try {
        // Crear una nueva instancia de User utilizando los datos proporcionados
        const user = new User(userData);

        // Guardar el nuevo usuario en la base de datos
        await user.save();

        // Enviar una respuesta exitosa junto con el usuario creado
        res.status(201).json(user);
    } catch (err) {
        // Enviar una respuesta de error en caso de algún problema durante la creación
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener todos los usuarios
const getUsers = async (_, res) => {
    try {
        // Obtener todos los usuarios de la base de datos
        const users = await User.find();

        // Enviar la lista de usuarios como respuesta
        res.json(users);
    } catch (err) {
        // Enviar una respuesta de error en caso de algún problema
        res.status(500).json({ message: err.message });
    }
};

// Controlador para obtener un usuario por su ID
const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar al usuario por su ID en la base de datos
        const user = User.findById(id);

        // Verificar si el usuario fue encontrado
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Enviar el usuario como respuesta
        return res.json(user);
    } catch (err) {
        // Enviar una respuesta de error en caso de algún problema
        return res.status(500).json({ message: err.message });
    }
};

// Controlador para actualizar la información de un usuario
const updateUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;

    try {
        // Buscar al usuario por su ID en la base de datos
        const user = User.findById(id);

        // Verificar si el usuario fue encontrado
        if (user) {
            // Actualizar la información del usuario con los nuevos datos
            user.name = userData.name;
            user.lastname = userData.lastname;
            user.email = userData.email;

            // Guardar los cambios en la base de datos
            await user.save();

            // Enviar el usuario actualizado como respuesta
            res.json(user);
        }

        // Enviar una respuesta de error si el usuario no fue encontrado
        return res.status(404).json({ message: 'User not found' });
    } catch (err) {
        // Enviar una respuesta de error en caso de algún problema
        return res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar un usuario por su ID
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar al usuario por su ID en la base de datos
        const user = User.findById(id);

        // Verificar si el usuario fue encontrado
        if (user) {
            // Eliminar al usuario de la base de datos
            await user.remove();

            // Enviar una respuesta indicando que el usuario fue eliminado
            return res.json({ message: 'User deleted' });
        }

        // Enviar una respuesta de error si el usuario no fue encontrado
        return res.status(404).json({ message: 'User not found' });
    } catch (err) {
        // Enviar una respuesta de error en caso de algún problema
        return res.status(500).json({ message: err.message });
    }
};

// Exportar los controladores para su uso en otros archivos
export {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
