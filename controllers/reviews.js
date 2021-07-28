// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Reviews = require("../models/reviews");
const Users = require("../models/users");
const Mongoose = require("mongoose");

//Index Route => get all the Reviews
router.get("/", (req, res) => {
  Reviews.find({}, (err, foundReviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReviews);
  });
});

//Find Review by Id
router.get("/location/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Reviews.find({ location_id: id }, (err, foundReview) => {
    console.log(foundReview);
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReview);
  });
});

router.get("/users/:id", (req, res) => {
  const id = Mongoose.Types.ObjectId(req.params.id);
  console.log(id);
  Reviews.find({ user_id: id }, (err, foundReview) => {
    console.log(foundReview);
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReview);
  });
});

//Create Review => Only logged in Users can Create a Review
router.post("/", (req, res) => {
  // create review
  const newReview = {
    user_id: Mongoose.Types.ObjectId(req.body.user_id),
    location_id: req.body.location_id,
    location_name: req.body.location_name,
    reviews: req.body.review,
  };
  Reviews.create(newReview, (err, newR) => {
    if (err) {
      return err;
    }
    res.json(newR);
  });
});

//Delete
router.delete("/:id", (req, res) => {
  Reviews.findByIdAndRemove(req.params.id, (err, deletedReview) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedReview);
  });
});

//Update
router.put("/:id", (req, res) => {
  Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedReview) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedReview);
    }
  );
});

// EXPORT
module.exports = router;
