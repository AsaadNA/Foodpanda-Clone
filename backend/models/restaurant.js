const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  operatingArea: {
    type: String,
  },
});

module.exports = mongoose.model("restaurants", restaurantSchema);
