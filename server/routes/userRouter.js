const express = require("express");
const router = express.Router({ mergeParams: true });
const {signUpValidation,signInValidation}  = require("../middleware/userValidation")
const signUp = require("../controllers/signUpController");
const signIn = require("../controllers/signInController")


router.post("/signup",signUpValidation,signUp);

router.post("/signin",signInValidation,signIn);



module.exports = router;