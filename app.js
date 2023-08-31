import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import indexRoute from "./routes/indexRoute.js";
const PORT = 3000;
const app = express();
app.use(cors());
// app.use(express.json());
// app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
