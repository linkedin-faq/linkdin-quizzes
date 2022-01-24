import { Router } from "express";
import passport from "passport";
import { signIn, logout } from "../../controllers/auth";

const router = Router();

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "auth/failed" }),
  signIn
);

router.get("/logout", logout);

export default router;
