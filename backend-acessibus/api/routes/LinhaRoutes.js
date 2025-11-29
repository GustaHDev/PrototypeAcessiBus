const express = require('express');
const linhaController = require('../controllers/LinhaController');
const router = express.Router();

router.post('/linha/search', linhaController.search);
router.post('/linha', linhaController.register);

module.exports = router;