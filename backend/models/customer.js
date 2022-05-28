const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  username: {
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

  gender: {
    type: String,
  },

  age: {
    type: Number,
  },

  address: {
    type: String,
  },
});

module.exports = mongoose.model("customers", customerSchema);
