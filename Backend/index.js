const express = require("express");
const dotenv = require("dotenv");
const db = require("./db.js");
const bookRoute = require("./route/bookRoute.js");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send("Hello world");
  } catch (err) {
    console.log(err);
  }
});

//defining book router
app.use("/book", bookRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log(`Server is running at port ${PORT}`);
});
