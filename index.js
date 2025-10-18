const express = require("express");

const app = express();

app.use("/users/:id", (req, res) => {
  console.log(req.params);
  res.send({
    name: "muskann",
    age: "20",
    userid: "pnnitish",
    password: "pn123456",
  });
});

app.use("/about", (req, res) => {
  res.send("Hello, This is about page");
});

app.use("/contact", (req, res) => {
  res.send("This is Contact page");
});

app.use("/details", (req, res) => {
  res.send("This is details page");
});

app.use("/", (req, res) => {
  res.send("This is HOME page");
});

module.exports = app;
