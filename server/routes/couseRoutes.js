const express = require('express');
const courses = require('../controllers/courseController');
const router = express.Router();


//Route checks the path 
router.get('/courses',courses);


module.exports = router;
