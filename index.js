const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "threr" });
});

app.listen(5000);
