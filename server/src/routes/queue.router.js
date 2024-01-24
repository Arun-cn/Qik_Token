import { Router } from "express";
import { createQueue, getQueue} from "../controllers/queue.controller.js";
import { requireAuth } from "../middlewaer/auth.Middlewaer.js";

const router = Router()

router.route("/create").post(requireAuth, createQueue);
router.route("/:url").get(requireAuth, getQueue);

export default router;
