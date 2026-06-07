const express = require('express');
const router = express.Router();
const { registro, login } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/auth/registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombre, correo, contrasena, rol]
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Pérez
 *               correo:
 *                 type: string
 *                 example: juan@example.com
 *               contrasena:
 *                 type: string
 *                 example: "123456"
 *               rol:
 *                 type: string
 *                 enum: [vecino, prestador, administrador]
 *                 example: vecino
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Correo ya registrado
 *       500:
 *         description: Error del servidor
 */
router.post('/registro', registro);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [correo, contrasena]
 *             properties:
 *               correo:
 *                 type: string
 *                 example: juan@example.com
 *               contrasena:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login exitoso con token JWT
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error del servidor
 */
router.post('/login', login);

module.exports = router;