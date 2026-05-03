const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/auth.routes');
const perfilRoutes = require('./src/routes/perfil.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/perfiles', perfilRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'VeciRed API corriendo' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});