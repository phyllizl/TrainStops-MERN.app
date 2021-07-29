const mongoose = require("mongoose");
const Users = require("./users");
const Schema = mongoose.Schema;

const reviewsSchema = mongoose.Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "Users" },
  location_id: { type: String },
  username: { type: String },
  location_name: { type: String },
  reviews: { type: String, required: true },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
