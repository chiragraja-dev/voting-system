const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
        enum: ['admin', 'voter']
    }
})


authSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next()
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt)
        user.password = hashPassword;
        next()
    } catch (error) {
        return next(error)
    }
})


authSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
};

const Auth = mongoose.model('Auth', authSchema)
module.exports = Auth
