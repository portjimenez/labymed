import "dotenv/config"; //Importamos dotenv para poder usar variables de entorno
import express from "express"; //Importamos express
import { getConnection } from "./src/db.js";
import cors from "cors"; // importamos cors para poder hacer peticiones desde el frontend
import usuariosRouters from "./src/routers/control.routes.js";

const app = express(); // crea una instancia de express "Aplicacion"

app.use(
  cors({
    origin: "http://localhost:4200", // le indica a la app que entienda CORS
  }),
); // le indica a la app que entienda CORS

app.use(express.json()); // le indica a la app que entienda JSON

const PORT = process.env.PORT; // Definimos el puerto desde el archivo .env

//importo las rutas 
app.route('/api/control', usuariosRouters)

// Definimos el puerto con el inicia el servidor
app.listen(PORT, async () => {
  try {
    await getConnection();
    console.log("Conectado a la base de datos");
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.log("error al conectar: ", error.message);
  }
});