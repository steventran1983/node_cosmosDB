import express from "express";
import { getEmployees } from "../controllers/employeeController.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("This is employee Route!");
});

router.use("/all", getEmployees);

export default router;
