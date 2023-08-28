import express from "express";
import employeeRoute from "./employeeRoute.js";
import productRoute from "./productRoute.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/employee", employeeRoute);
router.use("/product", productRoute);

export default router;
