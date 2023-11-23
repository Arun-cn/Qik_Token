import express from "express";
import userRouter from "./user.router.js";
const router = express.Router();

//router.use("/api", (req, res) => res.status(404).json("No API route found"));
router.use("/api/v1/users", userRouter);

export { router };
