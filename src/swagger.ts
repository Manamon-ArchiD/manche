const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Manche API',
      version: '1.0.0',
      description: 'API for managing rounds',
      contact: {
        name: 'Team 1',
        email: 'nathan.marie2@imt-atlantique.net'
      },
      servers: ['http://localhost:3001']
    }
  },
  apis: ['./routes/*.ts', './types/*.ts']
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
