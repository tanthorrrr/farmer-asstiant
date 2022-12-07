import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/UserModels.js";

const protect = asyncHandler(async (req, res, next) => {
     let token;

     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
          try {
               token = req.headers.authorization.split(" ")[1];
               const decode = jwt.verify(token, process.env.JWT_SECRET);
               req.user = await User.findById(decode.id).select("-password");
               next();
          } catch (error) {
               console.error(error);
               res.status(401);
               throw new Error("not autherized ,token failer");
          }
     }
     if (!token) {
          res.status(401);
          throw new Error("not autherized , no token");
     }
});

const admin = (req, res, next) => {
     if (req.user && req.user.idRole === 1) {
          next();
     } else {
          res.status(401);
          throw new Error("Not authorized as an Admin");
     }
};
export { protect, admin };
