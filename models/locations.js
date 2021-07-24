const mongoose = require("mongoose");
const Reviews = require("./reviews");
const Schema = mongoose.Schema;

const locationsSchema = mongoose.Schema({
  location_name: { type: String, required: true },
  likes: Number,
  coordinates: { type: Object, required: true },
  address: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
  opening_hours: Object,
});

const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;
