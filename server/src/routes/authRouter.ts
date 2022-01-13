import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";
import FacebookRouter from "./auth/facebookRouter";
import LinkedinRouter from "./auth/linkedinRouter";

const router = Router();

router.use("/google", GoogleRouter);
router.use("/linkedin", LinkedinRouter);
router.use("/facebook", FacebookRouter);

router.get("/failed", (_req, res) => res.send("authentication failed"));

export default router;
