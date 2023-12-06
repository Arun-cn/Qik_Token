import { Router } from "express";
import {
  getUserController,
  getUserProfileController,
} from "../controllers/user.controller.js";
import { requireAuth } from "../middlewaer/auth.Middlewaer.js";

const router = Router();

router.route("/me").get(requireAuth, getUserProfileController);
router.route("/:username").get(getUserController);

export default router;
