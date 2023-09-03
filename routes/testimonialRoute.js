const express = require("express");
const router = express.Router();
const getTestimonials = require("../controllers/testimonialController");

router.get("/", (req, res) => {
  res.send("This is testimonial Route!");
});

router.use("/all", getTestimonials);

module.exports = router;
