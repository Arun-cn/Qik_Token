import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

const router = express.Router();

//router.use("/api", (req, res) => res.status(404).json("No API route found"));
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/user", userRouter);

export { router };
