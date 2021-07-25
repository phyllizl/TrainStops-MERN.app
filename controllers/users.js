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

//Find a User by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id, (err, foundUsers) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
    res.status(StatusCodes.OK).json(foundUsers);
  });
});

//Create User
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  Users.create(req.body, (error, user) => {
    console.log("user", user);
    res.redirect("/");
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
