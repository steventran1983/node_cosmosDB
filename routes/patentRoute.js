const express = require("express");
const router = express.Router();
const getPatents = require("../controllers/patentController");

router.get("/", (req, res, next) => {
  res.send("This is patent Route!");
});

router.use("/all", getPatents);

module.exports = router;
