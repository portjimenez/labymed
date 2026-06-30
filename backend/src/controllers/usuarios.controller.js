import { getConnection } from "../db.js";

const SALT_ROUNDS = 10;

export async function loginUsuario(req, res) {
    try{
        const { correo, contrasna} = req.body
        const pool = await getConnection()
        const result = await pool.request()
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasna)
        .query("SELECT Rol FROM Usuario")

        const usuario = result.recorodset[0]

        if (!usuario) {
        return res.status(401).json({ mensaje: "Nombre o contraseña incorrecta" });
        }

        res.status(200).json({ usuario });
    }catch(err){
        res.status(500).json({ mensaje: err.message});
    }
}