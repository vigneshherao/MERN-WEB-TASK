const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const googleRouter = require("./routes/googleRouter")
const courseRouter = require("./routes/couseRoutes");


console.log(process.env.GOOGLE_CLIENT_ID)

//calling the database connection here
require("./models/db");


//middlware 
app.use(express.json());
app.use(cors());


app.use("/user",userRouter);
app.use("/api",googleRouter);
app.use("/list",courseRouter)






app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



