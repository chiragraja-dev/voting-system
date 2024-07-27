const Vote = require("../models/vote");
const Candidate = require("../models/candidate");
const Auth = require('../models/auth')
const jwt = require('jsonwebtoken');


const VoteForCandidate = async (req, res) => {
    const { candidateEmail } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.USER_SECRET);
        const voterEmail = decoded.userData.email;
        const voter = await Auth.findOne({ email: voterEmail })
        if (!voter) {
            res.status(404).json({ message: "user not found" })
        }
        const verifyVote = await Vote.findOne({ voterEmail: voterEmail })
        if (verifyVote) {
            res.status(400).json({ message: "You have added the vote priviously" })
        }
        const candidate = await Candidate.findOne({ email: candidateEmail })
        if (!candidate) {
            res.status(404).json({ message: "candidate not found" })
        }
        const vote = new Vote({ voterEmail: voterEmail, candidateEmail: candidateEmail })
        const data = await vote.save()
        res.status(200).json({ message: "vote added successfully" })
    } catch (error) {
        res.status(400).json({ error: "Server error", error: error.message });
    }
}

const VoteCount = async (req, res) => {
    try {
        const results = await Candidate.aggregate([
            {
                $lookup: {
                    from: "votes", // The name of the votes collection
                    localField: "email",
                    foreignField: "candidateEmail",
                    as: "votes"
                }
            },
            {
                $addFields: {
                    voteCount: { $size: "$votes" }
                }
            },
            {
                $project: {
                    candidateName: 1,
                    email: 1,
                    voteCount: 1
                }
            },
            {
                $sort: {
                    voteCount: -1 // Sort by voteCount in descending order
                }
            }
        ]);
        return res.status(200).json({ message: "Vote Count data", data: results })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong", data: error?.message })
    }

}

module.exports = {
    VoteForCandidate,
    VoteCount
};


