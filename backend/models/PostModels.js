import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
     {
          content: {
               type: String,
               required: true,
          },
          type: {
               type: String,
               required: true,
          },
          desc: {
               type: String,
               required: true,
          },
          desc_1: {
               type: String,
               required: true,
          },
          desc_2: {
               type: String,
               required: true,
          },
          desc_3: {
               type: String,
               required: true,
          },
          image: {
               type: String,
               required: true,
          },
          desc_image: {
               type: String,
               required: true,
          },
          image_1: {
               type: String,
               required: true,
          },
          desc_image_1: {
               type: String,
               required: true,
          },
          video: {
               type: String,
               required: true,
          },
          src: {
               type: String,
               require: true,
          },
     },

     {
          timestamps: true,
     }
);

const Post = mongoose.model("Posts", PostSchema);

export default Post;
