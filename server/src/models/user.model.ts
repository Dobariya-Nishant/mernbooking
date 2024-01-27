import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface UserType {
  _id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.verifyPassword = async function (password: string) {
  return await bcrypt.compare(this.password, password);
};

const UserModel = model<UserType>("User", userSchema);

export { UserModel, UserType };
