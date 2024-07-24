const { addCandidate } = require("../controllers/candidateController");

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
            },

            AddCandidate: {
                type: 'object',
                properties: {
                    candidateName: {
                        type: 'string',
                        description: 'fullname of candidate'
                    },
                    email: {
                        type: 'string',
                        description: 'email of candidate'
                    },
                    age: {
                        type: 'string',
                        description: 'age of candidate'
                    },
                    mobileNo: {
                        type: 'number',
                        description: 'mobile number of candidate'
                    }
                },
                required: ['email', 'candidateName', 'age', 'mobileNo']
            },
        }
    }
};