import express from "express";
import mongoose from "mongoose";
import { password, username, database } from "./config.js";

const app = express();

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@clusters.ciqicvp.mongodb.net/${database}?retryWrites=true&w=majority&appName=Clusters`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {});

app.get("/", (req, res) => {
  res.send("Hello world");
});
