const {
    addCandidate,
    getCandidates,
    updateCandidate,
    getCandidateByEmail,
    deleteCandidate
} = require('../controllers/candidateController')

const express = require('express');
const router = express.Router();
const { jwtAuthMiddleware, checkRole } = require('../middlewares/authMiddleware')

router.post('/add-candidate', jwtAuthMiddleware, checkRole(['admin']), addCandidate)
router.get('/get-candidate', jwtAuthMiddleware, checkRole(['admin', 'voter']), getCandidates)
router.put('/update-candidate', jwtAuthMiddleware, checkRole(['admin']), updateCandidate)
router.get('/get-candidateByEmail', jwtAuthMiddleware, checkRole(['admin', 'voter']), getCandidateByEmail)
router.delete('/delete-candidate', jwtAuthMiddleware, checkRole(['admin']), deleteCandidate)

module.exports = router;