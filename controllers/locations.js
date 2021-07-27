// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Locations = require("../models/locations.js");
const { Client } = require("@googlemaps/google-maps-services-js");

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

router.get("/:placeid", (req, res) => {
  const client = new Client({});
  client
    .getDetails({
      params: {
        place_id: req.params.placeid,
        key: process.env.APIKEY,
      },
      timeout: 1000,
    })
    .then((r) => {
      console.log(r.data.results);
      res.send(r.data.results);
    })
    .catch((e) => {
      console.log(e);
    });
});

//Post => Create New Location
router.post("/", (req, res) => {
  console.log("post");
  Locations.create(req.body, (error, newLocation) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(newLocation);
  });
});

// EXPORT
module.exports = router;
