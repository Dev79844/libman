import express from "express";
import { signup, login } from "@/controllers/user";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", login);
