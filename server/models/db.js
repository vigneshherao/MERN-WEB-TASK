const mongoose = require("mongoose");

//connection to database

mongoose
  .connect("mongodb://127.0.0.1:27017/server")
  .then(() => console.log("Connected to database!"))
  .catch((error) => console.log(error));