import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import mongoose, { connect } from "mongoose";
const connection = process.env.CONNECTION_URL;
import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";

app.get("/", (req, res) => {
  res.json("welcome");
});

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

mongoose
  .connect(connection, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(error));
