import express from "express";
import mongoose from "mongoose";
import { password, username, database, port } from "./config.js";
import router from "./src/routers/todoRouter.js";

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

app.use(express.json());

app.use("/", router);

app.listen(port, () => {});
