const perfilModel = require('../models/perfil.model');

const listar = async (req, res) => {
  try {
    const perfiles = await perfilModel.obtenerTodos();
    res.json(perfiles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfiles' });
  }
};

const obtener = async (req, res) => {
  try {
    const perfil = await perfilModel.obtenerPorId(req.params.id);
    if (!perfil) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }
    res.json(perfil);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

module.exports = { listar, obtener };