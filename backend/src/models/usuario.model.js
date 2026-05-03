const pool = require('../db');

const findByCorreo = async (correo) => {
  const result = await pool.query(
    'SELECT * FROM usuario WHERE correo = $1',
    [correo]
  );
  return result.rows[0];
};

const crear = async (nombre, correo, hash, rol) => {
  const result = await pool.query(
    `INSERT INTO usuario (nombre, correo, contrasena_hash, rol)
     VALUES ($1, $2, $3, $4) RETURNING id_usuario, nombre, correo, rol`,
    [nombre, correo, hash, rol]
  );
  return result.rows[0];
};

module.exports = { findByCorreo, crear };