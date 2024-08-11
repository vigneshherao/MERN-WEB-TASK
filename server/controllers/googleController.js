const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

//taking client id from .env

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "226619249007-7fasp6accavgbc3c43cprrgno33vo28h.apps.googleusercontent.com"
        });
        const { email, sub: googleId, name } = ticket.getPayload();
        
        //if user exists
        let user = await User.findOne({ email });
        if (!user) {
            // user if doesn't exist
            user = new User({ email, googleId, name });
            await user.save();
        }
        // Creating and assigning token
        const jwtToken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '14h' });
        res.status(200).json({ message: "signin successful", sucess: true, jwtToken, email, name: user.name });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { googleAuth };
