import sql from "mssql"; // importamos el driver

const connectionString = process.env.DB_CONNECTION_STRING; // obtenemos la cadena de conexion desde el archivo .env

// guardamos la conexion para reutilizarla
let pool = null;

export async function getConnection() {
  // indica si hay conexion la reutiliza
  if (pool) {
    return pool;
  }
  pool = await sql.connect(connectionString); // ejecuto la conxion a la base de datos
  return pool;
}

export { sql };