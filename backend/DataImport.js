import express from "express";
import products from "./assets/data/products.js";
import users from "./assets/data/users.js";
import Product from "./models/ProductModels.js";
import User from "./models/UserModels.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
     "/user",
     asyncHandler(async (req, res) => {
          await User.deleteMany({});
          const imPortUsers = await User.insertMany(users);
          res.send({ imPortUsers });
     })
);
ImportData.post(
     "/products",
     asyncHandler(async (req, res) => {
          await Product.deleteMany({});
          const imPortProducts = await Product.insertMany(products);
          res.send({ imPortProducts });
     })
);

export default ImportData;
