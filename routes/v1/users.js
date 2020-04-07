const express = require('express');
const User = require('../../controllers/users')
const router = express.Router();

router.get('/', User.getUsers);

module.exports = router;
