/*
      Category : Burger
          Items: Beef Burger
          Items: Chicken Burger
      Cateogry : Chinese          
          items: Dumpling
          items: Fried-Rice
  */

const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  restaurantName: {
    type: String,
  },

  categoryName: {
    type: String,
  },

  items: [
    {
      itemName: { type: String },
      itemPrice: { type: Number },
      itemDescription: { type: String },
    },
  ],
});

module.exports = mongoose.model("category", categorySchema);
