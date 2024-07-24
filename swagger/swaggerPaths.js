module.exports = {
    paths: {
        '/user/signup': {
            post: {
                tags: ['Users'],
                description: 'User signup',
                operationId: 'signup',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/User'
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'User signed up successfully'
                    },
                    '400': {
                        description: 'Bad request'
                    }
                }
            }
        },
        '/user/login': {
            post: {
                tags: ['Users'],
                description: 'User login',
                operationId: 'Login',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Login'
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'User login up successfully'
                    },
                    '400': {
                        description: 'Bad request'
                    }
                }
            }
        },
        '/add-candidate': {
            post: {
                tags: ['AddCandidate'],
                description: 'Add Candidate',
                operationId: 'Add Candidate',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/AddCandidate'
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Add Candidate up successfully'
                    },
                    '400': {
                        description: 'Bad request'
                    }
                }
            }
        }
    }
};
