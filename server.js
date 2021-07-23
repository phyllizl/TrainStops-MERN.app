// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");

// CONFIG - DOTENV
const dummy = require("./models/dummy.js");
require("dotenv").config();
const PORT = process.env.PORT;
const mongodbURI = process.env.MONGODB_URI;
// MIDDLEWARE

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json()); // express api gives json to react
//app.use(express.static("./cra/build")); //change to this so we do not have to shift.
//app.use(express.static("public"));
//controllers

app.listen(PORT, () => {
  console.log("Listening on the port", PORT);
});
mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
