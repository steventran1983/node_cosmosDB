const express = require("express");
const { getEmployees } = require("../controllers/employeeController.js");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("This is employee Route!");
});

router.use("/all", getEmployees);

module.exports = router;
