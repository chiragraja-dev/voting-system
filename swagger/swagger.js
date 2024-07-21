const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDef = require('./swaggerDef');
const swaggerComponents = require('./swaggerComponents');
const swaggerPaths = require('./swaggerPaths');

const specs = swaggerJsdoc({
    swaggerDefinition: {
        ...swaggerDef,
        components: swaggerComponents.components,
        paths: swaggerPaths.paths
    },
    apis: []
});

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
