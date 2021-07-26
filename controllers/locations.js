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

router.get("/result", (req, res) => {
  const client = new Client({});
  client
    .placesNearby({
      params: {
        location: { lat: 1.3419004463682798, lng: 103.96154272865057 },
        radius: 500,
        type: "point_of_interest",
        key: process.env.APIKEY,
      },
      timeout: 1000, // milliseconds
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
