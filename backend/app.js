const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");

const axios = require("axios");

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/menu/categories");
const itemRoutes = require("./routes/menu/items");

const DB_STRING =
  "mongodb://localhost:27017/foodpandaClone?readPreference=primary&ssl=false";

const app = express();

app.set("view engine", "vash");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    resave: false,
    secret: "API_SECRET",
    saveUninitialized: false,
  })
);

app.use("/api/auth/", authRoutes);
app.use("/api/menu/category/", categoryRoutes);
app.use("/api/menu/items/", itemRoutes);

/*
//DISPLAYING MENU API
app.get("/:restaurantName", async (req, res, next) => {
  try {
    const result = await axios.get(
      "http://localhost:3000/api/menu/items/" + req.params.restaurantName
    );
    //   console.log(result.data.data);
    res.render("displayOrders", {
      data: result.data.data,
    });
  } catch (err) {
    next(err);
  }
});
*/

app.get("*", (req, res) => {
  res.status(404).send({
    error: "Invalid Request To The API",
  });
});

mongoose.connect(DB_STRING, (err) => {
  if (err) {
    console.log("Error occurred while connecting to database", err);
  } else {
    console.log("Connected to Database Successfully");
    app.listen(3000, () => {
      console.log("Connected to Server Successfully");
    });
  }
});
