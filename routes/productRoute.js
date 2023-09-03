const express = require("express");
const router = express.Router();
const getProducts = require("../controllers/productController");

router.get("/", (req, res) => {
  res.send("This is product Route!");
});

router.use("/all", getProducts);

module.exports = router;
