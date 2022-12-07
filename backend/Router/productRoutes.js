import express from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/AuthMiddleware.js";

import Product from "../models/ProductModels.js";

const productRoute = express.Router();

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
                    throw new Error("Product already Reviewed");
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
export default productRoute;
