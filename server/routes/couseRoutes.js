const express = require('express');
const courses = require('../controllers/courseController');
const router = express.Router();
const authenticateUser = require("../middleware/courseAuthenticate")


//Route checks the path 
router.get('/courses',authenticateUser,courses);


module.exports = router;
