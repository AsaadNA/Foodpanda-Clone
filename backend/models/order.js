const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  restaurantName: {
    type: String,
  },

  items: [
    {
      itemName: { type: String },
      itemPrice: { type: Number },
      itemDescription: { type: String },
      itemQuantity: { type: Number },
      totalPrice: { type: Number },
    },
  ],

  totalAmount: { type: Number },
});

module.exports = mongoose.model("orders", orderSchema);
