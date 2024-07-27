const {
    VoteForCandidate,
    VoteCount
} = require('../controllers/voteController')

const express = require('express');
const router = express.Router();
const { jwtAuthMiddleware, checkRole } = require('../middlewares/authMiddleware')

router.post('/vote', jwtAuthMiddleware, checkRole(['voter']), VoteForCandidate)
router.get('/vote-count', jwtAuthMiddleware, checkRole(['admin', 'voter']), VoteCount)

module.exports = router;

