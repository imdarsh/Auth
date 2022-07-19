const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMe, verifyToken } = require('../controllers/authController'); 
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect, getMe);
router.route('/verifyToken').post(verifyToken);

module.exports = router;