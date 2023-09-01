const express = require("express");
const employeeRoute = require("./employeeRoute");

// const productRoute = require("./productRoute.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is API Route!");
});

// router.use("/employees", employeeRoute);
// router.use("/product", productRoute);

module.exports = router;
