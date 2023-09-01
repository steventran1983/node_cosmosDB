const express = require("express");
const router = express.Router();
// const getEmployees = require("../controllers/employeeController");

router.get("/", (req, res, next) => {
  res.send("This is employee Route!");
});

// router.use("/all", getEmployees);

module.exports = router;
