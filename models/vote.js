const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    voterEmail: {
        type: String,
        required: true,
        unique: true
    },
    candidateEmail: {
        type: String,
        required: true
    }
})

const Vote = mongoose.model('Vote', voteSchema)
module.exports = Vote