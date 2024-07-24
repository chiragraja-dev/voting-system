const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
