// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

// CONFIG - DOTENV
require("dotenv").config();
const PORT = process.env.PORT;
const mongodbURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/trainstops";

// MIDDLEWARE
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json()); // express api gives json to react
app.use(express.static("public"));
app.use(express.static("./client/build")); //change to this so we do not have to shift.

//controllers
const locationsController = require("./controllers/locations.js");
app.use("/v1/locations", locationsController);
const mrtController = require("./controllers/mrt");
app.use("/v1/mrt", mrtController);
const reviewsController = require("./controllers/reviews");
app.use("/v1/reviews", reviewsController);
const usersController = require("./controllers/users");
app.use("/v1/users", usersController);
const sessionsController = require("./controllers/sessions");
app.use("/v1/users", sessionsController);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

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
