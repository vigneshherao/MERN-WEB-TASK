const User = require("../models/user");
const bcrpyt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Here it will check status
const signin = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = await User.findOne({ email });
    // if the user not found in database
    if (!user) {
      return res
        .status(403)
        .json({ message: "User not Found, Create One", sucess: false });
    }
    //comparing the password from database if it is not matching show error
    const isPswd = await bcrpyt.compare(password,user.password);
    if(!isPswd){
        return res
        .status(403)
        .json({ message: "Password dosen't match", sucess: false });
    }

    //creating jwtToken for the users loggin
    const jwtToken = jwt.sign({email:user.email,_id:user._id},process.env.JWT_SECRET,{expiresIn:'14h'});
    res.status(200).json({ message: "signin sucessfull", sucess: true,jwtToken,email,name:user.name});
  } catch (err) {
    res.status(500).json({ message: `signin failed ${err}`, sucess: false });
  }
};

module.exports = signin;
