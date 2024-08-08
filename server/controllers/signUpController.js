const User = require("../models/user");
const bcrpyt = require("bcrypt");

//Here it will check status

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    // if the user found in database it directly return false message
    if (user) {
      return res
        .status(409)
        .json({ message: "User is already exits in database", sucess: false });
    }

    const newUser = new User({ name, email, password });
    //else it will bcrpt the data and save the new user in the database
    newUser.password = await bcrpyt.hash(password, 10);
    await newUser.save();

    res.status(201).json({ message: "signup sucessfull", sucess: true });
  } catch (err) {
    res.status(500).json({ message: `signup failed ${err}`, sucess: false });
  }
};

module.exports = signup;
