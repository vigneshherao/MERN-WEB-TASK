const express = require("express");
const router = express.Router({ mergeParams: true });
const {signUpValidation,signInValidation}  = require("../middleware/userValidation")
const signUp = require("../controllers/signUpController");


router.post("/signup",signUpValidation,signUp);

router.post("/signin",signInValidation,(req,res)=>{
    res.send("signin");
})



module.exports = router;