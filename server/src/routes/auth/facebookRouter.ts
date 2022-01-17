import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "auth/failed" }),
  (_req, res) => {
    console.log(res);
    // Successful authentication, redirect home.
    res.redirect("/sign-up");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

export default router;
