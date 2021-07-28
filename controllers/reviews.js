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
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Reviews.find({ id }, (err, foundReview) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReview);
  });
});

//Create Review => Only logged in Users can Create a Review
router.post("/", (req, res) => {
  console.log("body", req.body);
  console.log("body username", Mongoose.Types.ObjectId(req.body.username));

  // create review
  const newReview = {
    user_id: Mongoose.Types.ObjectId(req.body.username),
    location_id: req.body.location_id,
    location_name: req.body.location_name,
    reviews: req.body.review,
  };
  Reviews.create(newReview, (err, newR) => {
    if (err) {
      return err;
    }
    res.json(newR);
    // update user with review
    // Users.findByIdAndUpdate(
    //   Mongoose.Types.ObjectId(req.body.username),
    //   //push req.body.review
    //   { $push: { reviews: newR } },
    //   { new: true },
    //   (err, foundUser) => {
    //     // redirects to the room page
    //     res.redirect("/room");
    //   }
    // );
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
