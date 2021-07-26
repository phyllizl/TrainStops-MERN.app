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
      res.send("oops the db had a problem");
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>');
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser;
        // redirect back to our home page
        res.redirect("/");
      } else {
        // passwords do not match
        res.send('<a href="/"> password does not match </a>');
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
  Users.findOne(
    { username: req.body.username },
    (err, foundUser) => {
      if (foundUser) {
        return res.status(406).json({ error: err.message });
      }
    },

    Users.create(req.body, (error, user) => {
      console.log("user", user);
      res.redirect("/");
    })
  );
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
