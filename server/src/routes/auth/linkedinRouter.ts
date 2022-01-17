import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("linkedin", { state: "SOME STATE" }));

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
  res.redirect("/sign-up");
});

export default router;
