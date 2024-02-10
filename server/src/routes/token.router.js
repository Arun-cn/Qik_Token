import { Router } from "express";
import { createToken } from "../controllers/token.controller.js";
import { requireAuth } from "../middlewaer/auth.Middlewaer.js";

const router = Router();

router.route("/create").post(requireAuth, createToken);
//router.route("/:id").get(requireAuth, getToken);

export default router;
