const express = require("express");
const employeeRoute = require("./employeeRoute");
const productRoute = require("./productRoute");
const testimonialRoute = require("./testimonialRoute");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is API Route!");
});

router.use("/employees", employeeRoute);
router.use("/products", productRoute);
router.use("/testimonials", testimonialRoute);

module.exports = router;
