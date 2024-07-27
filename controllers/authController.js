const Auth = require('../models/auth');
const { generateToken } = require("../utils/generateToken");
const comparePassword = require("../models/auth")

const signup = async (req, res) => {
    const { fullName, email, password, role } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        let user = await Auth.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user = new Auth({ fullName, email, password });
        await user.save();
        const payload = { id: user.id, role, email };
        const token = generateToken(payload);
        res.status(200).json({ message: 'signup successfully by email id ' + user.email, token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body
        const user = await Auth.findOne({ email })
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid user or password" })
        }
        if (!role) {
            return res.status(400).json({ message: "Role is required" })
        }
        const payload = { id: user?.id, role, email }
        const token = generateToken(payload)

        if (user.role == role) {
            res.status(200).json(({ message: "login successfully as admin ", token }))
        } else {
            res.status(200).json(({ message: "login successfully", token }))
        }
    } catch (error) {
        res.status(400).json(({ message: "something went wrong", error: error?.message }))
    }

}

module.exports = { signup, login };
