const express = require("express");
const router = express.Router();
const data = require("../data");
const path = require("path");

router.get("/", (req, res) => {
  res.json({ products: data.products });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const products = data.products.find((item) => item.id === parseInt(id));
  if (products) res.json(products);
  else res.status(404).json({ message: `User with ID: ${id} not found` });
});

router.post("/", (req, res) => {
  const userData = req.body;
  const productindex = req.body.id;
  const index = data.products.findIndex(
    (item) => item.id === parseInt(productindex)
  );
  if (index === -1 && req.body.price > 0 && req.body.stock > 0) {
    data.products.push(userData);
    res.json({ message: `User added`, products: data.products });
  } else {
    res
      .status(400)
      .send("the product id or price or amount in stock is invalid ;-;");
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  const userInd = data.products.findIndex((item) => item.id === parseInt(id));

  if (userInd !== -1 && req.body.price > 0 && req.body.stock > 0) {
    data.products[userInd] = userData;
    res.json({
      message: `User with ID: ${id} updated`,
      products: data.products,
    });
  } else {
    res
      .status(404)
      .json({
        message: `User not found or price isnt >0 or stock amount is 0`,
      });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userInd = data.products.findIndex((item) => item.id === parseInt(id));

  if (userInd !== -1) {
    data.products.splice(userInd, 1);
    res.json({
      message: `User with ID: ${id} deleted`,
      products: data.products,
    });
  } else {
    res.status(404).json({ message: `User not found` });
  }
});
module.exports = router;
