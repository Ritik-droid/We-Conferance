const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { MONGO_URL } = process.env;

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("GET Request Called");
});

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

console.log(mongoose.connection.readyState);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
