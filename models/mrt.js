const mongoose = require("mongoose");

const mrtSchema = mongoose.Schema({
  station_name: { type: String, required: true },
  line: [String],
  coordinates: { type: Object, required: true },
  address: String,
});

const MRT = mongoose.model("MRT", mrtSchema);

module.exports = MRT;
