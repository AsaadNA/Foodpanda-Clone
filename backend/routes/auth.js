const express = require("express");
const router = express.Router();

const customerSchema = require("../models/customer");
const restaurantSchema = require("../models/restaurant");

//Get current session
router.get("/login/", (req, res) => {
  if (req.session.userType === "customer") {
    res.status(200).send({
      message: "Customer still in session",
      data: {
        username: req.session.username,
        userType: req.session.userType,
      },
    });
  } else if (req.session.userType === "restaurant") {
    res.status(200).send({
      message: "Restaurant still in session",
      data: {
        email: req.session.email,
        userType: req.session.userType,
      },
    });
  } else {
    res.status(400).send({
      error: "User is not in session",
    });
  }
});

//Logout & Destroy session
router.get("/logout/", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.status(200).send({
        message: "User logged out",
      });
    }
  });
});

/* #######  CUSTOMER ####### */

//Login a customer using Username & create a new express session
router.post("/login/customer", (req, res) => {
  const { username, password } = req.body;
  const result = customerSchema.findOne({ username }, (err, user) => {
    if (!err) {
      if (user) {
        if (user.password === password) {
          //Create a new session
          req.session.username = username;
          req.session.userType = "customer";
          res.status(200).send({
            message: "Successfully logged in and session created",
            data: {
              username: req.session.username,
              userType: req.session.userType,
            },
          });
        } else {
          //INvalid Password
          res.status(400).send({
            error: "Invalid password",
          });
        }
      } else {
        //Invalid Username
        res.status(400).send({
          error: "Invalid username",
        });
      }
    } else {
      //Some Error occureed on mongoose's end
      res.status(400).send({
        error: "Some error occurred",
      });
    }
  });
});

//Register a new customer
router.post("/register/customer", async (req, res) => {
  const { email, username, password } = req.body;
  const newData = new customerSchema({
    email,
    password,
    username,
  });

  //Check for duplicate email
  let data = await customerSchema.find({ email });
  if (data.length === 0) {
    //Check for duplicate username
    data = await customerSchema.find({ username });
    if (data.length === 0) {
      const result = newData.save((err, data) => {
        if (err) {
          res.status(400).send({
            error: "There was some error registering user",
          });
        } else if (data) {
          res.status(200).send({
            message: "Successfully registered the user",
            data: newData,
          });
        }
      });
    } else {
      res.status(400).send({
        error: `Customer already registered with the same username ${username}`,
      });
    }
  } else {
    res.status(400).send({
      error: `Customer already registered with the email ${email}`,
    });
  }
});

/* #######  RESTAURANT  ####### */

//Login a restaurant using email & create a new express session
router.post("/login/restaurant", (req, res) => {
  const { email, password } = req.body;
  const result = restaurantSchema.findOne({ email }, (err, user) => {
    if (!err) {
      if (user) {
        if (user.password === password) {
          //Create a new session
          req.session.email = email;
          req.session.userType = "restaurant";
          res.status(200).send({
            message: "Successfully logged in and session created",
            data: {
              email: req.session.email,
              userType: req.session.userType,
            },
          });
        } else {
          //INvalid Password
          res.status(400).send({
            error: "Invalid password",
          });
        }
      } else {
        //Invalid Username
        res.status(400).send({
          error: "Invalid email",
        });
      }
    } else {
      //Some Error occureed on mongoose's end
      res.status(400).send({
        error: "Some error occurred",
      });
    }
  });
});

//Register a new restaurant
router.post("/register/restaurant", async (req, res) => {
  const { email, restaurantName, password, operatingArea } = req.body;
  const newData = new restaurantSchema({
    email,
    password,
    restaurantName,
    operatingArea,
  });

  //Check for duplicate email
  let data = await restaurantSchema.find({ email });
  if (data.length === 0) {
    //Check for duplicate username
    data = await restaurantSchema.find({ restaurantName });
    if (data.length === 0) {
      const result = newData.save((err, data) => {
        if (err) {
          res.status(400).send({
            error: "There was some error registering restaurant",
          });
        } else if (data) {
          res.status(200).send({
            message: "Successfully registered the restaurant",
            data: newData,
          });
        }
      });
    } else {
      res.status(400).send({
        error: `Restaurant already registered with the same name ${restaurantName}`,
      });
    }
  } else {
    res.status(400).send({
      error: `Restaurant already registered with the email ${email}`,
    });
  }
});

module.exports = router;
