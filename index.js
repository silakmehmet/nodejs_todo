const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server 5000 portunda çalışıyor");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
