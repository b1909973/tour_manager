const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Create a new product
router.post('/login', authController.login);
router.post('/register', authController.register);

// Get all auths
// router.post('/register', authController.);


module.exports = router;
