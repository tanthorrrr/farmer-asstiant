import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
     {
          firstname: {
               type: String,
               required: true,
          },
          lastname: {
               type: String,
               required: true,
          },
          image: {
               type: String,
          },
          rating: {
               type: Number,
               required: true,
               default: 0,
          },

          comment: {
               type: String,
               required: true,
          },
          user: {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               Ref: "User",
          },
     },
     {
          timestamps: true,
     }
);

const ProductSchema = mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
          },
          image: {
               type: String,
               required: true,
          },
          type: {
               type: String,
               required: true,
          },
          price: {
               type: Number,
               required: true,
               default: 0,
          },
          shortDesc: {
               type: String,
               required: true,
          },

          description: {
               type: String,
               required: true,
          },
          reviews: [reviewSchema],

          rating: {
               type: Number,
               required: true,
               default: 0,
          },
          numReview: {
               type: Number,
               required: true,
               default: 0,
          },
          idUser: {
               type: String,
               require: true,
          },
     },
     {
          timestamps: true,
     }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
