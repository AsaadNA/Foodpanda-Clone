const express = require("express");
const router = express.Router();

const restaurantSchema = require("../../models/restaurant");
const categorySchema = require("../../models/category");

/*
    create,update,delete
*/

//Insert new category for a restaurant
//Also checks for duplicate category
router.post("/:restaurantName/:categoryName", async (req, res) => {
  const { restaurantName, categoryName } = req.params;
  let data = await restaurantSchema.findOne({ restaurantName });
  if (data) {
    const newData = new categorySchema({
      restaurantName,
      categoryName,
    });

    //Check if this category already exist for this restaurant
    data = await categorySchema.findOne({
      restaurantName,
      categoryName,
    });

    if (!data) {
      const result = newData.save({ new: true }, (err, data) => {
        if (err) {
          res.status(400).send({
            error: `Some error occured while inserting ${categoryName} category`,
          });
        } else if (data) {
          res.status(200).send({
            message: `Successfully added ${categoryName} category`,
            data: newData,
          });
        }
      });
    } else {
      res.status(400).send({
        error: `${categoryName} category already exists for this restaurant`,
      });
    }
  } else {
    res.status(400).send({
      error: `Could not find ${restaurantName} in our restaurant collection`,
    });
  }
});

//Update category
router.put(
  "/:restaurantName/:categoryName/:updatedCategoryName",
  async (req, res) => {
    const { restaurantName, categoryName, updatedCategoryName } = req.params;
    const result = categorySchema.findOneAndUpdate(
      {
        categoryName,
        restaurantName,
      },
      {
        categoryName: updatedCategoryName,
      },
      { new: true }, //returns updated doc
      (err, result) => {
        if (err) {
          res.status(400).send({
            error: `Some error occured while updating ${categoryName}`,
          });
        } else if (result) {
          res.status(200).send({
            message: `Successfully updated ${categoryName} category`,
            data: result,
          });
        } else {
          res.status(400).send({
            error: `Could not find ${categoryName} category to update`,
          });
        }
      }
    );
  }
);

//Delete a category
router.delete("/:restaurantName/:categoryName", async (req, res) => {
  const { restaurantName, categoryName } = req.params;
  const result = categorySchema.findOneAndDelete(
    {
      categoryName,
      restaurantName,
    },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).send({
          error: `Some error occured while deleting ${categoryName}`,
        });
      } else if (result) {
        res.status(200).send({
          message: `Successfully delete ${categoryName} category`,
        });
      } else {
        res.status(400).send({
          error: `Could not find ${categoryName} to delete`,
        });
      }
    }
  );
});

module.exports = router;
