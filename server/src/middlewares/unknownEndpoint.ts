import { Handler, Response } from "express";

const unknownEndPoint: Handler = (_req, res: Response, next) => {
  res.redirect("/");
  // res.status(404).json({ error: "Unknown endpoint" });
  next();
};

export default unknownEndPoint;
