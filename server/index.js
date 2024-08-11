const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const userRouter = require("./routes/userRouter");
const Course = require("./models/course");
const { OAuth2Client } = require('google-auth-library');




//calling the database connection here
require("./models/db");


//middlware 

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  // or whatever port your React app is running on
    credentials: true
  }));


//routes
app.use("/user",userRouter);


app.get("/ping",(req,res)=>{
    res.send("pong");
});


const client = new OAuth2Client("297566711441-cbj4087aopt0gjta8of8jmbcbb4mcqrc.apps.googleusercontent.com");
// Google authentication
app.post('/api/google-auth', async (req, res) => {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "297566711441-cbj4087aopt0gjta8of8jmbcbb4mcqrc.apps.googleusercontent.com"
      });
      const { email, sub: googleId } = ticket.getPayload();
      
      // Check if user exists
      let user = await User.findOne({ email });
      if (!user) {
        // Create new user if doesn't exist
        user = new User({ email, googleId });
        await user.save();
      }
      
      // Create and assign token
      const jwtToken = jwt.sign({ _id: user._id }, "vignesh-2019");
      res.json({ token: jwtToken });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Protected route example
  app.get('/api/protected', (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.user._id });
  });




app.get("/courses",async(req,res)=>{
    try {
        const courseDatas = await Course.find({});
        res.status(200).json(courseDatas);
    } catch (error) {
        console.error("Error fetching courses:", error);
    }
})





app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



