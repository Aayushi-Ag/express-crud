const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/UserController');

// POST route for creating a new user
router.post('/', createUser);

module.exports = router;
