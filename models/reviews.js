const mongoose = require("mongoose");
const Users = require("./users");
const Location = require("./locations");

const reviewsSchema = mongoose.Schema({
  username: [Users.Schema],
  location: [Location.Schema],
  reviews: { type: String, required: true },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
