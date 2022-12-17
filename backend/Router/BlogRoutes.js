import express from "express";
const blogRoute = express.Router();
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/AuthMiddleware.js";
import Blog from "../models/BlogModels.js";
import multer from "multer";
import mongoose from "mongoose";

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, "./uploads");
     },
     filename: function (req, file, cb) {
          cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
     },
});
const fileFilter = (req, file, cb) => {
     //reject a file
     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
          cb(null, true);
     } else {
          cb(null, false);
     }
};
const upload = multer({
     storage: storage,
     limits: {
          fieldSize: 1024 * 1024 * 5,
     },
     fileFilter: fileFilter,
});
//GET ALL Blog
blogRoute.get(
     "/",
     asyncHandler(async (req, res) => {
          const blogs = await Blog.find({});
          res.json(blogs);
     })
);
export default blogRoute;
