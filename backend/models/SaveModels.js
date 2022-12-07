import mongoose from "mongoose";

const saveSchema = mongoose.Schema(
     {
          idUser: {
               type: mongoose.Schema.Types.ObjectId,
               require: true,
               Ref: "User",
          },
          saveItems: [
               {
                    name: { type: String, require: true },
                    image: { type: String, require: true },
                    price: {
                         type: Number,
                         require: true,
                    },
                    product: {
                         type: mongoose.Schema.Types.ObjectId,
                         require: true,
                         Ref: "Product",
                    },
               },
          ],
     },
     {
          timestamp: true,
     }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
