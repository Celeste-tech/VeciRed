const jwt = require('jsonwebtoken');

/**
 * Middleware que verifica el token JWT en el header Authorization.
 * @param {Object} req - Request de Express
 * @param {Object} res - Response de Express
 * @param {Function} next - Función next de Express
 * @returns {Object} 401 - Si no hay token
 * @returns {Object} 403 - Si el token es inválido o expirado
 */
const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Token inválido' });
  }
};

/**
 * Middleware que restringe acceso según el rol del usuario.
 * @param {...string} roles - Roles permitidos
 * @returns {Function} Middleware de Express
 * @returns {Object} 403 - Si el usuario no tiene el rol requerido
 */
const soloRol = (...roles) => (req, res, next) => {
  if (!roles.includes(req.usuario.rol)) {
    return res.status(403).json({ error: 'No autorizado para este rol' });
  }
  next();
};

module.exports = { verificarToken, soloRol };