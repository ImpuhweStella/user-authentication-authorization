//routes: This folder contains the route files. authRoutes.js will define the routes for user registration and login.
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
