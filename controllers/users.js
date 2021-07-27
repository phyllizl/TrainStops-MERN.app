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

//* /sessions (POST) => login
router.post("/", (req, res) => {
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
        res.json({ foundUser: foundUser });
      } else {
        // passwords do not match
        res.json({ error: "password does not match" });
      }
    }
  });
  //res.send(req.body);
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

//Delete
router.delete("/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedUser);
  });
});

//Update
//AM REALLY NOT SURE ABOUT THIS.....
router.put("/:id", (req, res) => {
  res.send("");
});

// EXPORT
module.exports = router;
