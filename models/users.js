const mongoose = require("mongoose");
const Reviews = require("./reviews");
const Schema = mongoose.Schema; 

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
