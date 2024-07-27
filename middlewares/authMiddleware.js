const jwt = require('jsonwebtoken');
require('dotenv').config();


const jwtAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).json({ error: "Invalid token" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) res.status(401).json({ error: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, process.env.USER_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        res.status(401).json({ error: "Unauthorized123", message: error?.message })
    }
}

const checkRole = (roles) => (req, res, next) => {
    if (!roles.includes(req.user?.userData?.role)) {
        return res.status(401).json({ message: "User not allowed" });
    }
    next();
};

module.exports = { jwtAuthMiddleware, checkRole };