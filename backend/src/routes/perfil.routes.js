const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfil.controller');
const { verificarToken } = require('../middleware/auth.middleware');

router.get('/', perfilController.listar);
router.get('/:id', perfilController.obtener);

module.exports = router;