const restaurantAuth = (req, res, next) => {
  if (localStorage.getItem("SavedToken")) {
    next();
  } else {
    res.send("Unauthorized Access to API..");
  }
};

module.exports = restaurantAuth;
