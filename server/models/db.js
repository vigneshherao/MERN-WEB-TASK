const mongoose = require("mongoose");
require('dotenv').config();

//connection to database

const Mongo_URL =process.env.DBURL;

async function main() {
  await mongoose.connect(Mongo_URL);
}

main()
  .then(() => console.log("Connected to database!"))
  .catch((error) => console.log(error));