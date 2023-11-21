/* Importacion del modulo mongoose */
import mongoose from 'mongoose'
/* Definicion de la funcion de conexion a la base de datos */
export const connectDb = async () => {
    try {
        //Conexion a MongoDB utilizando el metodo connect de mongoose
        await mongoose.connect('mongodb+srv://carandev:L4p60pQtzaNtGvLT@maincluster.0tmnqtq.mongodb.net/issues-devices?retryWrites=true&w=majority')
        /* Mensaje de conexion exitosa */
        console.log('MongoDB connected')
    } catch (err) {
        /* Manejo de errores */
        console.error(err.message)
    }
}