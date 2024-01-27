import { Router } from "express";
import { registerUser } from "../controllers";

const userRouter = Router();

userRouter.route("/register").post(registerUser);

export { userRouter };