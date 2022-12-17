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

const likeSchema = mongoose.Schema(
     {
          firstname: {
               type: String,
               required: true,
          },
          lastname: {
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
const BlogSchema = mongoose.Schema(
     {
          content: {
               type: String,
               required: true,
          },
          image: {
               type: String,
               required: true,
          },
          reviews: [reviewSchema],
          likes: [likeSchema],
          numLike: {
               type: Number,
               require: true,
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

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
