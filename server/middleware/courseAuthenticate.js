const jwt = require("jsonwebtoken");

//authorising user with token for user side
const authenticateUser = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403).json({message:"unauthorised user!"});
    }

    try {
        const decodedData = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decodedData;
        next();
    } catch (error) {   
        return res.status(401).json({message:"unauthorised token or wrong something!!"});
    }
}


module.exports = authenticateUser;