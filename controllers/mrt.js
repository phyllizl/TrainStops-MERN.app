// DEPENDENCIES
const express = require("express");
const router = express.Router();
const MRT = require("../models/mrt");
const seedMrt = require("../models/seedMrt");
const { Client } = require("@googlemaps/google-maps-services-js");

//Index route => gets all the MRT stations
router.get("/", (req, res) => {
  if (req.session.currentUser) {
    console.log("index working");
    MRT.find({}, (err, foundMRTS) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundMRTS);
    });
  } else {
    res.redirect('/login');
  }
});

//Seed Route
router.get("/mrtSeed", (req, res) => {
  MRT.remove({}, (err, mrt) => {
    MRT.create(seedMrt, (err, data) => {
      console.log(seedMrt);
      res.redirect("/mrt");
    });
  });
});

//Find by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  MRT.findById(id, (err, foundMRT) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundMRT);
  });
});

router.get("/:id/hotspots", (req, res) => {
  const id = req.params.id;
  const client = new Client({});
  MRT.findById(id, (err, foundMRT) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    const mrtLat = parseFloat(foundMRT["Possible Locations"][0]["LATITUDE"]);
    console.log(mrtLat);
    const mrtLng = parseFloat(foundMRT["Possible Locations"][0]["LONGITUDE"]);
    console.log(mrtLng);
    client
      .placesNearby({
        params: {
          location: { lat: mrtLat, lng: mrtLng },
          radius: 500,
          type: "point_of_interest",
          key: process.env.APIKEY,
        },
        timeout: 1000, // milliseconds
      })
      .then((r) => {
        console.log(r.data.results);
        // let dataReformat = r.data.results.map;
        res.send(r.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  });
});

// EXPORT
module.exports = router;
