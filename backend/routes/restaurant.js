const express = require("express");
const router = express.Router();

const restaurantSchema = require("../models/restaurant");

router.get("/", (req, res) => {
  const result = restaurantSchema.find((err, data) => {
    if (err) {
      res.status(400).send({
        error: "Some error occured",
      });
    } else if (data) {
      res.status(200).send({
        data,
      });
    } else {
      res.status(400).send({
        error: "Could not find any restraunts",
      });
    }
  });
});

module.exports = router;
