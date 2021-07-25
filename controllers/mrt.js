// DEPENDENCIES
const express = require("express");
const router = express.Router();
const MRT = require("../models/mrt");

//Index route => gets all the MRT stations
router.get("/", (req, res) => {
    console.log("index working");
    MRT.find({}, (err, foundMRTS) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundMRTS);
    });
  });

//Find by id
router.get("/:id", (req, res) => {
  const id = req.params.id
  MRT.findById(id, (err, foundMRT) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
    res.status(StatusCodes.OK).json(foundMRT);
  });
});

// EXPORT
module.exports = router;
