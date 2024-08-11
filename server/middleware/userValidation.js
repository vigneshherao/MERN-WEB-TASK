const {userSignUpSchema,userSignInSchema} = require("../utils/userSchemaValidation");

// it will check for the signUp validation it is failed it will directly return the Error Message
module.exports.signUpValidation  = (req,res,next)=>{
    const {error} = userSignUpSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad Request",error});
    }
    next();
}

// it will check for the signIn validation it is failed it will directly return the Error Message
module.exports.signInValidation = (req,res,next)=>{
    const {error} = userSignInSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad Request",error});
    }
    next();
}

