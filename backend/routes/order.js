const express = require("express");
const router = express.Router();

const orderSchema = require("../models/order");

/*

    -> Get -> Get all orders for a specific user
    -> Get -> Get all orders for a restaurant

    -> Post -> Create a new order
    -> Delete -> Delete an order

*/

router.get("/restaurant/:restaurantName", (req, res) => {
  const { restaurantName } = req.params;
  const result = orderSchema.find(
    {
      restaurantName,
    },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "Error finding orders",
        });
      } else if (data.length === 0) {
        res.status(400).send({
          error: "Could not find any orders associated with restaurant",
        });
      } else {
        res.status(200).send({
          data,
        });
      }
    }
  );
});

router.get("/customer/:customerName", (req, res) => {
  const { customerName } = req.params;
  const result = orderSchema.find(
    {
      customerName,
    },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "Error finding orders",
        });
      } else if (data.length === 0) {
        res.status(400).send({
          error: "Could not find any orders associated with customerName",
        });
      } else {
        res.status(200).send({
          data,
        });
      }
    }
  );
});

router.post("/", (req, res) => {
  const { username, restaurantName, items, totalAmount } = req.body;
  const newData = new orderSchema({
    username,
    restaurantName,
    items,
    totalAmount,
  });

  const result = newData.save((err, data) => {
    if (err) {
      res.status(400).send({
        error: "There was some error saving order",
      });
    } else if (data) {
      res.status(200).send({
        message: "Order was placed successfully",
      });
    }
  });
});

router.delete("/", (req, res) => {
  const { _id } = req.body;
  const result = orderSchema.findByIdAndDelete(_id, (err, data) => {
    if (err) {
      res.status(400).send({
        error: "Error cancelling order",
      });
    } else if (data) {
      res.status(200).send({
        message: "Cancelled order successfully",
      });
    }
  });
});

module.exports = router;
