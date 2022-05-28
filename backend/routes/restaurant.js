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
      const fdata = data.map((d) => {
        return {
          _id: d._id,
          restaurantName: d.restaurantName,
          operatingArea: d.operatingArea,
          operatingFees: d.operatingFees,
          cuisineType: d.cuisineType,
        };
      });

      res.status(200).send({
        data: fdata,
      });
    } else {
      res.status(400).send({
        error: "Could not find any restraunts",
      });
    }
  });
});

module.exports = router;
