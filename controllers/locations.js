// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Locations = require("../models/locations.js")

//Index => Get all Locations(Hotspots)
//QUESTION => SHOULD IT BE "/<MRTSTATION>/LOCATION" ??
router.get("/", (req, res) => {
    Locations.find({}, (err, foundLocations) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundLocations);
    });
  });

//Post => Create New Location
router.post("/", (req, res) => {
    console.log("post")
     Locations.create(req.body, (error, newLocation) => {
          if (error) {
              res.status(400).json({ error: error.message });
          }
          res.status(200).send(newLocation);
      });
  });


// EXPORT
module.exports = router;
