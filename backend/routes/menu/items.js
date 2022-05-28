const express = require("express");
const router = express.Router();

const categorySchema = require("../../models/category");

//Return all categories with their items
router.get("/:restaurantName", (req, res) => {
  const { restaurantName } = req.params;
  const result = categorySchema.find(
    {
      restaurantName,
    },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "Some error occured fetching data",
        });
      } else if (data.length > 0) {
        res.status(200).send({
          data,
        });
      } else {
        res.status(400).send({
          error: "Could not find restaurant",
        });
      }
    }
  );
});

router.put("/", (req, res) => {
  const {
    _id,
    itemName,
    itemPrice,
    itemDescription,
    categoryName,
    restaurantName,
  } = req.body;

  const result = categorySchema.findOneAndUpdate(
    {
      categoryName,
      restaurantName,
    },
    {
      $set: {
        "items.$[el].itemName": itemName,
        "items.$[el].itemPrice": itemPrice,
        "items.$[el].itemDescription": itemDescription,
      },
    },
    {
      arrayFilters: [{ "el._id": _id }],
      new: true,
    },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "An Error Occured",
        });
      } else if (data === null) {
        res.status(400).send({
          error: "Could not find category or restaurant",
        });
      } else if (data) {
        res.status(200).send({
          data,
        });
      }
    }
  );
});

//POST through JSON
//Insert new item
router.post("/", (req, res) => {
  const { restrauntName, categoryName, itemPrice, itemName, itemDescription } =
    req.body;
  let result = categorySchema.findOneAndUpdate(
    {
      categoryName,
      restrauntName,
    },
    {
      $push: {
        items: {
          itemName,
          itemPrice,
          itemDescription,
        },
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "Some error occured inserting item",
        });
      } else if (data) {
        res.status(200).send({
          message: "Inserted new item",
          data,
        });
      } else {
        res.status(400).send({
          error: "Could not find restaurant or some error occured",
        });
      }
    }
  );
});

//POST through JSON
//Delete item
router.delete("/", (req, res) => {
  const { restaurantName, categoryName, itemName } = req.body;
  const result = categorySchema.findOneAndUpdate(
    {
      categoryName,
      restaurantName,
    },
    {
      $pull: {
        items: {
          itemName,
        },
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(400).send({
          error: "Some error occured deleteing item",
        });
      } else if (data) {
        res.status(200).send({
          data,
        });
      } else {
        res.status(400).send({
          error: "Could not find restaurant or category",
        });
      }
    }
  );
});

module.exports = router;
