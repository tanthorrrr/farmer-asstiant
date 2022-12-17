import express from "express";
import products from "./assets/data/products.js";
import users from "./assets/data/users.js";
import Product from "./models/ProductModels.js";
import User from "./models/UserModels.js";
import asyncHandler from "express-async-handler";
import Blog from "./models/BlogModels.js";
import blog from "./assets/data/blog.js";
import Post from "./models/PostModels.js";
import post from "./assets/data/post.js";

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
ImportData.post(
     "/blogs",
     asyncHandler(async (req, res) => {
          await Blog.deleteMany({});
          const imPortBlogs = await Blog.insertMany(blog);
          res.send({ imPortBlogs });
     })
);
ImportData.post(
     "/posts",
     asyncHandler(async (req, res) => {
          await Post.deleteMany({});
          const imPortPosts = await Post.insertMany(post);
          res.send({ imPortPosts });
     })
);

export default ImportData;
