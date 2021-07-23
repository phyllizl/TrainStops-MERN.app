const mongoose = require("mongoose");
const Reviews = require("./reviews");

const locationsSchema = mongoose.Schema({
  location_name: { type: String, required: true },
  likes: Number,
  coordinates: { type: Object, required: true },
  address: String,
  reviews: [Reviews.Schema],
  opening_hours: Object,
});

const Locations = mongoose.model("Location", locationsSchema);

module.exports = Locations;
