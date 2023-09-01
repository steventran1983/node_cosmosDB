const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const indexRoute = require("./routes/indexRoute");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   res.send("Hello World! This is the app te le hot me toalaHy Vong thanh cong");
// });

app.use("/api", indexRoute);
app.use(express.static("./frontend/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
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
