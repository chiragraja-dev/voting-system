const { addCandidate, getCandidates, updateCandidate } = require('../controllers/candidateController')
const express = require('express');
const router = express.Router();
const { jwtAuthMiddleware, checkRole } = require('../middlewares/authMiddleware')

router.post('/add-candidate', jwtAuthMiddleware, checkRole(['admin']), addCandidate)
router.get('/get-candidate', jwtAuthMiddleware, checkRole(['admin', 'voter']), getCandidates)
router.put('/update-candidate', jwtAuthMiddleware, checkRole(['admin']), updateCandidate)

module.exports = router;