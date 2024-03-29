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

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product)
      return res
        .status(404)
        .json("The product with the given ID was not found");

    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    if (!Product)
      return res
        .status(404)
        .json("The product with the given ID was not found.");
    res.status(200).json("Deleted the product successfully!");
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was a problem deleting the product" });
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
