// DEPENDENCIES
const express = require("express");
const session = express.Router();
const Users = require("../models/users.js");
const bcrypt = require("bcrypt");

session.get("/", (req, res) => {
  if (req.session.currentUser) {
    Users.findById(req.session.currentUser._id, (err, currentUser) => {
      res.send(currentUser);
    });
  }
});

//* /sessions (POST) => login
session.post("/", (req, res) => {
  Users.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.json({ error: "Sorry, no user found" });
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser;
        // redirect back to our home page
        res.send(foundUser);
      } else {
        // passwords do not match
        res.json({ error: "password does not match" });
      }
    }
  });
});
//Delete
session.delete("/logout", (req, res) => {
  req.session.destroy((err, deletedUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json({ deletedUser: "logout" });
  });
});

// EXPORT
module.exports = session;
