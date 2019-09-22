// require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import mongoose from "mongoose";

const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/runningapp",
  { useNewUrlParser: true }
);
// app.use("/users", userRoutes);

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/runningapp");

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
