import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../middleware/AuthMiddleware.js";

import User from "../models/UserModels.js ";
import generateToken from "../utils/generateToken.js";
const userRouter = express.Router();

//Login
userRouter.post(
     "/login",
     asyncHandler(async (req, res) => {
          const { email, password } = req.body;
          const user = await User.findOne({ email });
          if (user && (await user.matchPassword(password))) {
               res.json({
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    dob: user.dob,
                    avt: user.avt,
                    phonenumber: user.phonenumber,
                    idRole: user.idRole,
                    token: generateToken(user._id),
                    createdAt: user.createdAt,
               });
          } else {
               res.status(401);
               throw new Error("Tài Khoản Hoặc Mật Khẩu Không đúng!");
          }
     })
);
//Register
userRouter.post(
     "/",
     asyncHandler(async (req, res) => {
          const { firstname, lastname, email, password, dob, phonenumber } = req.body;
          const userExists = await User.findOne({ email });

          if (userExists) {
               res.status(400);
               throw new Error("Email đã có người đăng ký");
          }

          const user = await User.create({
               firstname,
               lastname,
               email,
               dob,
               phonenumber,
               password,
          });
          if (user) {
               res.status(201).json({
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    dob: user.dob,
                    phonenumber: user.phonenumber,
                    avt: user.avt,
                    idRole: user.idRole,
                    token: generateToken(user._id),
               });
          } else {
               res.status(400);
               throw new Error("Dữ Liệu Người Dùng Không Hợp Lệ");
          }
     })
);
//PROFILE
userRouter.get(
     "/profile",
     protect,
     asyncHandler(async (req, res) => {
          const user = await User.findById(req.user._id);
          if (user) {
               res.json({
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    dob: user.dob,
                    avt: user.avt,
                    phonenumber: user.phonenumber,
                    idRole: user.idRole,
                    createdAt: user.createdAt,
               });
          } else {
               res.status(404);
               throw new Error("Không có người dùng");
          }
     })
);
//Update profile
userRouter.put(
     "/profile",
     protect,
     asyncHandler(async (req, res) => {
          const user = await User.findById(req.user._id);
          if (user) {
               user.firstname = req.body.firstname || user.firstname;
               user.lastname = req.body.lastname || user.lastname;
               user.email = req.body.email || user.email;
               user.phonenumber = req.body.phonenumber || user.phonenumber;
               if (req.body.password) {
                    user.password = req.body.password;
               }
               const updateUser = await user.save();
               res.json({
                    _id: updateUser._id,
                    firstname: updateUser.firstname,
                    lastname: updateUser.lastname,
                    email: updateUser.email,
                    avt: updateUser.avt,
                    phonenumber: updateUser.phonenumber,
                    idRole: updateUser.idRole,
                    token: generateToken(user._id),
                    createdAt: updateUser.createdAt,
               });
          } else {
               res.status(404);
               throw new Error("không có người dùng");
          }
     })
);

// get all user

userRouter.get(
     "/",
     protect,
     admin,
     asyncHandler(async (req, res) => {
          const users = await User.find({});
          res.json(users);
     })
);
userRouter.get(
     "/info",
     asyncHandler(async (req, res) => {
          const users = await User.find({})
               .select({
                    firstname: 1,
                    lastname: 1,
                    email: 1,
                    phonenumber: 1,
                    avt: 1,
               })
               .exec((err, users) => {
                    if (err) {
                         res.json({
                              result: "Failed",
                              data: [],
                              mesage: `Error ${err}`,
                         });
                    } else {
                         res.json(users);
                    }
               });
     })
);
export default userRouter;
