// import mongoose from "mongoose";
const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/product.model");
const app = express();
const port = 3001;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.send("Alberto Sierra");
});
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://albertosierra101:As022499@sierratonindb.zdapufq.mongodb.net/?retryWrites=true&w=majority&appName=SierratoninDB"
  )
  .then(() => {
    console.log("Connected to database!");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });
