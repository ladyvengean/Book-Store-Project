import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.url);
  return res.status(200).send("Welcome to MERN Book Store API");
});

app.use("/books", bookRoute);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ Error connecting to MongoDB:", error);
  });

