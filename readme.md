# Gestor de errores de equipos

### Correr el proyecto en local

- Abrir la terminal (cmd, powershel, iterm, etc.)

- Escribir `git clone https://github.com/carandev/DevicesIssuesManager.git` o `git clone git@github.com:carandev/DevicesIssuesManager.git` si ya tiene
habilitada la conexión entre su equipo y github con ssh. Tenga en cuenta que en el directorio donde ejecute el comando será donde se cree la carpeta
con el proyecto

- Una vez en la carpeta del proyecto escribimos `cd web` y después `npm install`

- Después de instaladas las dependencias debe crear el archivo `.env.local` en el cual deben ir las credenciales de Auth0 con los siguientes nombres:
`VITE_AUTH0_DOMAIN` y `VITE_AUTH0_CLIENTID`

- Una vez hechos estos pasos ejecutar el proyecto con `npm run dev`
