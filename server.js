const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const appTitle = "Shopping Cart";
const hostname = process.env.APP_HOSTNAME;
const port = process.env.APP_PORT;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("[MongoDB] Connected"))
  .catch((err) => console.error("[MongoDB] Error:", err));

const Item = require("./models/Item");

app.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      res.render("index", { appTitle, items });
    })
    .catch((err) => {
      res.status(404).json({ msg: "No items found" });
    });
});

app.post("/items", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.redirect("/"));
});

app.get("/items/:id/delete", (req, res) => {
  Item.findByIdAndDelete({ _id: req.params.id }).then(() => res.redirect("/"));
});

app.listen(port, () => console.log(`Server is running on ${hostname}:${port}`));
