import { Router } from "express";
import { createToken, getNextToken } from "../controllers/token.controller.js";
import { requireAuth } from "../middlewaer/auth.Middlewaer.js";

const router = Router();

router.route("/create").post(requireAuth, createToken);
router.route("/nexttoken").get(requireAuth, getNextToken);

//router.route("/:id").get(requireAuth, getToken);

export default router;
