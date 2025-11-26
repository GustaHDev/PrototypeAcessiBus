const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.post('/user', userController.register);

router.get('/user', AuthMiddleware.validation, userController.getProfile);

module.exports = router;