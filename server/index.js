const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const User = require("./models/user");
const userRouter = require("./routes/userRouter")
const Course = require("./models/course");



//calling the database connection here
require("./models/db");


//middlware 

app.use(express.json());
app.use(cors("https://freecodecamptask.vercel.app"));


//routes
app.use("/user",userRouter);


app.get("/ping",(req,res)=>{
    res.send("pong");
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



