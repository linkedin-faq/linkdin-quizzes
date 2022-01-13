import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate("linkedin", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("linkedin", { failureRedirect: "auth/failed" }),
  (_req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

export default router;
