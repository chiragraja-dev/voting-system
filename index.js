require('dotenv').config();
const express = require("express")
const app = express()
const db = require('./config/db');
const swagger = require('./swagger/swagger');
const authRoutes = require('./routes/authRoutes')

app.use(express.json());

swagger(app);
app.use('/user', authRoutes)

app.get('/', function (req, res) {
    res.send("getting the api data for the first api")
})

app.listen(3000)