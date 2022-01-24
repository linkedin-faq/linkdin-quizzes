import { Router } from "express";
import passport from "passport";
import { signIn, logout } from "../../controllers/auth";

const router = Router();

router.get(
  "/",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "auth/failed" }),
  signIn
);

router.get("/logout", logout);

export default router;
