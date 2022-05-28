const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/menu/categories");
const itemRoutes = require("./routes/menu/items");
const restaurantRoutes = require("./routes/restaurant");
dotenv.config();

const app = express();

const corsOptions = {
  exposedHeaders: "x-auth-token",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
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
app.use("/api/restaurant/", restaurantRoutes);

app.get("*", (req, res) => {
  res.status(404).send({
    error: "Invalid Request To The API",
  });
});

app.listen(process.env.API_PORT, (err) => {
  if (err) {
    console.error("Error occured while connecting to server", err);
  } else {
    console.log("Connected to server Successfully !");
    console.log("Trying to connect to database server..");

    mongoose.connect(process.env.DB_CONNECTION_STRING, (dbError) => {
      if (dbError) {
        console.error("Error Occured while connecting to database");
      } else {
        console.log("Connected to Database Successfully");
      }
    });
  }
});
