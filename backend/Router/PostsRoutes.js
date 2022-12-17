import express from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/AuthMiddleware.js";
import Post from "../models/PostModels.js";
import multer from "multer";
import mongoose from "mongoose";

const PostRoute = express.Router();
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
//GET ALL Posts
PostRoute.get(
     "/",
     asyncHandler(async (req, res) => {
          const posts = await Post.find({});
          res.json(posts);
     })
);
PostRoute.get(
     "/:id",
     asyncHandler(async (req, res) => {
          const posts = await Post.findById(req.params.id);
          if (posts) {
               res.json(posts);
          } else {
               res.status(404);
               throw new Error("Post not Found");
          }
     })
);
export default PostRoute;
