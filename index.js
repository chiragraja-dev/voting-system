const express = require('express');
const app = express();
const db = require('./config/db');
const swagger = require('./swagger/swagger');
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const { jwtAuthMiddleware, checkRole } = require('./middlewares/authMiddleware');

app.use(express.json());

swagger(app);

app.use('/user', authRoutes);
app.use('/', candidateRoutes);

app.get('/', function (req, res) {
    res.send("getting the api data for the first api");
});

app.listen(3000);
