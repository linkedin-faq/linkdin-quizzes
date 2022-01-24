import { Handler } from "express";
import path from "path";

const render: Handler = (_req, res, next) => {
  try {
    res.sendFile(path.resolve("../client/build/index.html"));
  } catch (err) {
    next(err);
  }
};

export default render;
