const mongoose = require("mongoose");

//connection to database

const Mongo_URL = process.env.DBURL;

mongoose
  .connect("mongodb+srv://vignesh:MSzA7aS1uoI44alb@cluster0.ao1473g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to database!"))
  .catch((error) => console.log(error));