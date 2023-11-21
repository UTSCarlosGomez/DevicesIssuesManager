// Importación de módulos necesarios
import express from 'express'
import { connectDb } from './db.js'// Importación de la función de conexión a la base de datos
/* Rutas */
import deviceRoutes from './routes/deviceRoutes.js'// Rutas para dispositivos
import roomRoutes from './routes/roomRoutes.js'// Rutas para salas
import issueRoutes from './routes/issueRoutes.js'// Rutas para incidencias
import userRoutes from './routes/userRoutes.js'// Rutas para usuarios
/* Configuracion del puerto */
const PORT = 5000
const app = express();// Creación de una instancia de la aplicación Express
app.use(express.json()); // Middleware para el manejo de datos en formato JSON
/* Configuracion de las rutas */
app.use('/devices', deviceRoutes);
app.use('/rooms', roomRoutes);
app.use('/issues', issueRoutes);
app.use('/users', userRoutes);
/* Conexion a la base de datos */
connectDb()
/* Inicio del servidor */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});