import path from "path";
import { Handler } from "express";

const homePage: Handler = (_req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
};

export default homePage;
