const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const User = require("./models/user");
const userRouter = require("./routes/userRouter")



//calling the database connection here
require("./models/db");


//middlware 

app.use(express.json());
app.use(cors());
app.use("/user",userRouter);


app.get("/", async (req, res) => {
    const data  = await User.find({});
    res.send(data);
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



