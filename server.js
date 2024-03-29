// import mongoose from "mongoose";
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");
const Product = require("./models/product.model");
const User = require("./models/User.model");

const app = express();
const port = 3001;

app.use(express.json());

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find All
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Find by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a product
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

// Delete a product
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

app.post("/api/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json("Username already exists");
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      const userToCreate = {
        ...req.body,
        password: hashedPassword,
      };
      const user = await User.create(userToCreate);
      const { password, ...userWithoutPassword } = user.toObject();
      return res.status(201).json({
        message: "User successfully created!",
        user: userWithoutPassword,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful!" });
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
