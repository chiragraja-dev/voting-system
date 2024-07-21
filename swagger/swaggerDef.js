const { version } = require("mongoose");

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Voting API',
        version: '1.0.0',
        description: 'API for the voting project'
    },
    server: [
        {
            url: 'http://localhost:3000/',
            description: 'local server'
        }
    ]
}