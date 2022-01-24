import { Router } from "express";
import passport from "passport";
import { signIn, logout } from "../../controllers/auth";

const router = Router();

router.get("/", passport.authenticate("linkedin", { state: "SOME STATE" }));

router.get(
  "/callback",
  passport.authenticate("linkedin", { failureRedirect: "auth/failed" }),
  signIn
);

router.get("/logout", logout);

export default router;
