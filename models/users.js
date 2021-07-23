const mongoose = require("mongoose");
const Reviews = require("./reviews");

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  reviews: [Reviews.schema],
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
