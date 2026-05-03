const pool = require('../db');

const obtenerTodos = async () => {
  const result = await pool.query(`
    SELECT
      pp.id_perfil,
      u.nombre,
      pp.descripcion,
      pp.telefono,
      pp.whatsapp,
      COALESCE(ROUND(AVG(c.puntuacion), 1), 0) AS promedio,
      COUNT(c.id_calificacion) AS total_resenas
    FROM perfil_prestador pp
    JOIN usuario u ON u.id_usuario = pp.id_usuario
    LEFT JOIN calificacion c ON c.id_perfil = pp.id_perfil AND c.visible = TRUE
    WHERE pp.activo = TRUE
    GROUP BY pp.id_perfil, u.nombre, pp.descripcion, pp.telefono, pp.whatsapp
  `);
  return result.rows;
};

const obtenerPorId = async (id_perfil) => {
  const result = await pool.query(`
    SELECT
      pp.id_perfil,
      u.nombre,
      pp.descripcion,
      pp.telefono,
      pp.whatsapp
    FROM perfil_prestador pp
    JOIN usuario u ON u.id_usuario = pp.id_usuario
    WHERE pp.id_perfil = $1 AND pp.activo = TRUE
  `, [id_perfil]);
  return result.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId };