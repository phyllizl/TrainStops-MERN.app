const mongoose = require("mongoose");

const mrtSchema = mongoose.Schema({
  "Possible Locations": Array,
  "Station": String,
  "Station Name": String,
});

const MRT = mongoose.model("MRT", mrtSchema);

module.exports = MRT;