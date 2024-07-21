const jwt = require('jsonwebtoken');

const generateToken = (userData) => {
    return jwt.sign({ userData }, process.env.USER_SECRET, { expiresIn: '1h' })
}

module.exports = { generateToken }