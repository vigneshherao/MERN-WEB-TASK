const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");


//calling the database connection here
require("./models/db");


//middlware 

app.use(bodyParser.json());
app.use(cors());



app.get("/", async (req, res) => {
    const data  = await User.find({});
    res.send(data);
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



