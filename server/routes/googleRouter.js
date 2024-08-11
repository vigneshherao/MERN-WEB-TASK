const express = require('express');
const router = express.Router();
const { googleAuth } = require('../controllers/googleController');

//Route checks the path 
router.post('/google-auth', googleAuth);

module.exports = router;
