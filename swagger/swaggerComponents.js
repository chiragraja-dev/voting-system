
module.exports = {
    components: {
        schemas: {
            // 1. user
            User: {
                type: 'object',
                properties: {
                    fullName: {
                        type: 'string',
                        description: 'fullname of user'
                    },
                    email: {
                        type: 'string',
                        description: 'email of user'
                    },
                    password: {
                        type: 'string',
                        description: 'Password of user'
                    },
                    role: {
                        type: 'string',
                        description: 'role of user'
                    },
                },
                required: ['fullName', 'email', 'password', 'role']
            },
            Login: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'Email of the user'
                    },
                    password: {
                        type: 'string',
                        description: 'Password of the user'
                    },
                    role: {
                        type: 'string',
                        description: 'role of user'
                    },
                },
                required: ['email', 'password', 'role']
            }
        }
    }
};