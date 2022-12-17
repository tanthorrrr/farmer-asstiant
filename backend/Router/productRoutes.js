import express from "express";
const productRoute = express.Router();
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/AuthMiddleware.js";
import Product from "../models/ProductModels.js";
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
//GET ALL RPODUCT
productRoute.get(
     "/",
     asyncHandler(async (req, res) => {
          const products = await Product.find({});
          res.json(products);
     })
);

//GET SINGLE PRODUCT

productRoute.get(
     "/:id",
     asyncHandler(async (req, res) => {
          const product = await Product.findById(req.params.id);
          if (product) {
               res.json(product);
          } else {
               res.status(404);
               throw new Error("Product not Found");
          }
     })
);
//Create new product
productRoute.post(
     "/",
     protect,
     // upload.single("image"),
     asyncHandler(async (req, res, next) => {
          // product.save().then((result) => {
          //      console.log(result);
          //      res.status(201).json({
          //           message: "addproduct successfuly",
          //      });
          // });
          const { name, type, price, shortDesc, description, image } = req.body;
          const productExist = await Product.findOne({ name });
          if (productExist) {
               res.status(400);
               throw new Error("Tên Sản Phẩm đã tồn tại");
          } else {
               const product = new Product({
                    name,
                    type,
                    price,
                    shortDesc,
                    description,
                    // image: req.file.path,
                    image,
                    idUser: req.user._id,
               });
               if (product) {
                    const createdproduct = await product.save();
                    res.status(201).json(createdproduct);
               } else {
                    res.status(400);
                    throw new Error("không thành công");
               }
          }
     })
);
//edit
productRoute.put(
     "/:id",
     protect,
     upload.single("image"),
     asyncHandler(async (req, res, next) => {
          const { name, type, price, shortDesc, description, image } = req.body;
          const product = await Product.findById(req.params.id);
          if (product) {
               (product.name = name) || product.name,
                    (product.type = type || product.type),
                    (product.price = price || product.price),
                    (product.shortDesc = shortDesc || product.shortDesc),
                    (shortDesc.description = description || shortDesc.description),
                    // image: req.file.path,
                    (description.image = description || description.image);
               const updateProduct = await product.save();
               res.json(updateProduct);
          } else {
               res.status(404);
               throw new Error("Không tim thấy sản phẩm");
          }
     })
);

// PRODUCT REVIEW
productRoute.post(
     "/:id/review",
     protect,
     asyncHandler(async (req, res) => {
          const { rating, comment } = req.body;
          const product = await Product.findById(req.params.id);

          if (product) {
               const alreadyReview = product.reviews.find(
                    (r) => r.user.toString() === req.user._id.toString()
               );
               if (alreadyReview) {
                    res.status(400);
                    throw new Error("Sản phẩm này bạn đã bình luận ");
               }
               const review = {
                    firstname: req.user.firstname,
                    lastname: req.user.lastname,
                    image: req.user.avt,
                    rating: Number(rating),
                    comment,
                    user: req.user._id,
               };
               product.reviews.push(review);
               product.numReview = product.reviews.length;
               product.rating =
                    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                    product.reviews.length;
               await product.save();
               res.status(201).json({ message: "Review Added" });
          } else {
               res.status(404);
               throw new Error("Product not Found");
          }
     })
);
//Delete product
productRoute.delete(
     "/:id",
     protect,
     asyncHandler(async (req, res) => {
          const product = await Product.findById(req.params.id);
          if (product) {
               await product.remove();
               res.json({ message: "Delete product successfuly" });
          } else {
               res.status(404);
               throw new Error("Product not Found");
          }
     })
);

export default productRoute;
