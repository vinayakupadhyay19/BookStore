const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//define the mongo db connection URL

const mongoDbLocal = process.env.LOCAL;
const mongoUrl = mongoDbLocal;

//setup the mongo db connection

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get the deafult connection
const db = mongoose.connection;

//define event listner for the connection
db.on("connected", () => {
  console.log("MongoDb connection connected!");
});

db.on("error", () => {
  console.log("Failed to connect to MongoDB");
});

db.on("disconnected", () => {
  console.log("MongoDb connection disconnected!");
});

module.exports = db;
