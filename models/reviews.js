const mongoose = require("mongoose");
const Users = require("./users");
const Schema = mongoose.Schema;

const reviewsSchema = mongoose.Schema({
  username: { type: Schema.Types.ObjectId, ref: "Users" },
  location: { type: String, place_id: "" },
  reviews: { type: String, required: true },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
