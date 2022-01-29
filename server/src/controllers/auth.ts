import { Handler } from "express";

export const logout: Handler = (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  req.session = null!;
  req.logout();
  res.redirect("/sign-up");
};

export const signIn: Handler = (_req, res) => res.redirect("/");
