const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.listen(PORT, err => {
  if (err) throw err;

  console.log(`Up and running on Port: ${PORT}`);
});
