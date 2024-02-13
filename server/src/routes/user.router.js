import { Router } from "express";
import {
  getUserController,
  getUserProfileController,
  getUserQueues,
  getUserTokens,
} from "../controllers/user.controller.js";
import { requireAuth } from "../middlewaer/auth.Middlewaer.js";

const router = Router();

router.route("/me").get(requireAuth, getUserProfileController);
router.route("/queues").get(requireAuth, getUserQueues);
router.route("/tokens").get(requireAuth, getUserTokens);
router.route("/:username").get(getUserController);

export default router;
