import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
     {
          firstname: {
               type: String,
               required: true,
          },
          lastname: {
               type: String,
               require: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
          },
          phonenumber: {
               type: String,
               default: "",
          },
          avt: {
               type: String,
               default: "",
          },
          password: {
               type: String,
               required: true,
          },
          idRole: {
               type: Number,
               required: true,
               default: 3,
          },
     },
     {
          timestamps: true,
     }
);
//
userSchema.methods.matchPassword = async function (enterPassword) {
     return await bcrypt.compare(enterPassword, this.password);
};
userSchema.pre("save", async function (next) {
     if (!this.isModified("password")) {
          next();
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model("User", userSchema);
export default User;
