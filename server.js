import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mainRouter from "./routes/index.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

app.use("/", mainRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Mongo DB connected with Server  `);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect with Mongo DB `, err);
    process.exit(1);
  });
