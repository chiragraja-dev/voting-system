const Candidate = require('../models/candidate');

const addCandidate = async (req, res) => {
    const { email, candidateName, age, mobileNo } = req.body;
    try {
        let user = await Candidate.findOne({ email });
        if (user) {
            // res.status(400).json(({ message: "something went wrong" }))
            return res.status(400).json(({ message: 'Candidate already exists' }));
        }
        const newCandidate = new Candidate({ email, candidateName, age, mobileNo });
        await newCandidate.save();
        res.status(200).json({ message: 'Candidate added successfully' });
    } catch (error) {
        res.status(500).json(({ error: 'Server error' }));
    }
};

const updateCandidate = async (req, res) => {
    const { email, ...data } = req.body
    console.log(email, "------", data)
    try {
        if (!email) {
            return res.status(404).json({ message: "Email require" })

        }
        const user = await Candidate.findOne({ email: email })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        const updatedData = await Candidate.findOneAndUpdate(
            { email: email },
            data,
            {
                new: true,
                runValidators: true
            }
        )
        return res.status(200).json({ message: "Data updated", data: updatedData })
    } catch (error) {
        return res.status(400).json({ message: "Somthing went wrong" })

    }
}

// const updateCandidate = async (req, res) => {
//     const { email, ...data } = req.body;
//     console.log(email, "------", data);

//     try {
//         if (!email) {
//             return res.status(400).json({ message: "Email required" });
//         }

//         const user = await Candidate.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Corrected findOneAndUpdate call
//         const updatedData = await Candidate.findOneAndUpdate(
//             { email: email },  // Filter
//             data,              // Update
//             {
//                 new: true,     // Return the updated document
//                 runValidators: true // Validate updates
//             }
//         );

//         return res.status(200).json({ message: "Data updated", data: updatedData });
//     } catch (error) {
//         console.error('Error in updateCandidate:', error);
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };


const getCandidates = async (req, res) => {
    try {
        const data = await Candidate.find()
        if (!data) {
            return res.status(200).json({ message: " all candidates", data: 'no data found' })
        }
        res.status(200).json({ message: " all candidates", data: data })
    } catch (error) {
        res.status(400).json({ message: " somthing went wrong" })

    }
}

module.exports = { addCandidate, getCandidates, updateCandidate }