const Candidate = require("../models/candidate");

const addCandidate = async (req, res) => {
    const { email, candidateName, age, mobileNo } = req.body;
    try {
        let user = await Candidate.findOne({ email });
        if (user) {
            // res.status(400).json(({ message: "something went wrong" }))
            return res.status(400).json({ message: "Candidate already exists" });
        }
        const newCandidate = new Candidate({ email, candidateName, age, mobileNo });
        await newCandidate.save();
        res.status(200).json({ message: "Candidate added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const updateCandidate = async (req, res) => {
    const { email, ...data } = req.body;
    try {
        if (!email) {
            return res.status(404).json({ message: "Email require" });
        }
        const user = await Candidate.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        const updatedData = await Candidate.findOneAndUpdate(
            { email: email },
            data,
            {
                new: true,
                runValidators: true,
            }
        );
        return res.status(200).json({ message: "Data updated", data: updatedData });
    } catch (error) {
        return res.status(400).json({ message: "Somthing went wrong" });
    }
};

const getCandidates = async (req, res) => {
    try {
        const data = await Candidate.find();
        if (!data) {
            return res
                .status(200)
                .json({ message: " all candidates", data: "no data found" });
        }
        res.status(200).json({ message: " all candidates", data: data });
    } catch (error) {
        res.status(400).json({ message: " somthing went wrong" });
    }
};

const getCandidateByEmail = async (req, res) => {
    const userData = req.query;
    try {
        if (!userData?.email) {
            return res.status(200).json({ message: "email is required" });
        }
        const data = await Candidate.findOne({ email: userData?.email });
        res.status(200).json({ message: "data found ", data: data });
    } catch (error) {
        res
            .status(400)
            .json({ message: "something went wrong", error: error.message });
    }
};

// const deleteCandidate = async (req, res) => {
//     const data = req.query;
//     const email = data?.email
//     try {
//         if (!email) {
//             return res.status(404).json({ meassge: "email required" });
//         }
//         const data = await Candidate.findOneAndDelete({ email });
//         if (!data) {
//             return res.status(404).json({ message: "email id not found" });
//         }
//         return res.status(200).json({ meassge: "Candidate delete successfully" });
//     } catch (error) {
//         return res.status(400).json({ message: "weong", error: error.message })
//     }
// };

const deleteCandidate = async (req, res) => {
    const email = req.query.email;
    try {
        if (!email) {
            return res.status(400).json({ message: "Email required" });
        }
        const data = await Candidate.findOneAndDelete({ email });
        if (!data) {
            return res.status(404).json({ message: "Email ID not found" });
        }
        return res.status(200).json({ message: "Candidate deleted successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


module.exports = {
    addCandidate,
    getCandidates,
    updateCandidate,
    getCandidateByEmail,
    deleteCandidate,
};
