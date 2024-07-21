const mongoose = require('mongoose')
// mongoose.connect()

const URL = 'mongodb://localhost:27017/voting-app'

const mongoUrl = URL

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', () => {
    console.log("-----------------------db connected");
});

db.on('disconnected', () => {
    console.log("**********************Not connected");
});

db.on('error', (err) => {
    console.log("Connection error: ", err);
});

module.exports = db