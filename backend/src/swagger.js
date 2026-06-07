const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VeciRed API',
      version: '1.0.0',
      description: 'API REST para la plataforma VeciRed - Conecta vecinos con prestadores de servicios en Medellín',
    },
    servers: [
      { url: 'https://vecired-backend.onrender.com', description: 'Producción' },
      { url: 'http://localhost:3000', description: 'Local' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    tags: [
      { name: 'Auth', description: 'Registro y login de usuarios' },
      { name: 'Perfiles', description: 'Gestión de perfiles de prestadores' },
      { name: 'Admin', description: 'Administración del sistema' },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options);