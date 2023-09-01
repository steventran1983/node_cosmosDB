const express = require("express");
const cors = require("cors");
// import * as dotenv from "dotenv";
// dotenv.config();
// const indexRoute = require("./routes/index.js");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! This is the app ddii");
});

// app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import express from "express";
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   {
//     res.send("Hello World! This is the app");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
