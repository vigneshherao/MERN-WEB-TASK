const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");


//calling the database connection here
require("./models/db");


//middlware 

app.use(bodyParser.json());
app.use(cors());



app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



