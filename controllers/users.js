// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Users = require("../models/users.js");
const bcrypt = require("bcrypt");

//Index route => gets all the Users
router.get("/", (req, res) => {
  Users.find({}, (err, foundUsers) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUsers);
  });
});

//Create User
router.post("/new", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  console.log("creating");
  Users.create(req.body, (error, user) => {
    if (error) {
      console.log("error", error);
      res.json({ error: error.message });
    } else {
      console.log("user", user);
      res.json({ user: user });
    }
  });
});

// EXPORT
module.exports = router;
