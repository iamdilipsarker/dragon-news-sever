const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

//middleware

app.use(cors());

app.get("/", (req, res) => {
  res.send("new api running");
});

const categories = require("./data/categories.json");

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("news server running on", port);
});
