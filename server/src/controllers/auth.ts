import { Handler } from "express";

export const logout: Handler = (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/sign-up");
};

export const signIn: Handler = (_req, res) => res.redirect("/sign-up");
