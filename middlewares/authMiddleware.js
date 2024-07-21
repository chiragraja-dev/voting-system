const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ error: "Invalid token" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) return res.statu
    s(401).json({ error: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        res.status(401).json({ error: "Unauthorized" })
    }
}

module.exports = jwtAuthMiddleware;