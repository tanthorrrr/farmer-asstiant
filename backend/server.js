import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/mongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Router/productRoutes.js";
import { errorHandler, notFound } from "./middleware/Error.js";
import userRouter from "./Router/userRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

//Handel Error
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server is running...PORT ${PORT}`));
