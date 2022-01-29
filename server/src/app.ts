import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import path from "path";
import cookieSession from "cookie-session";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import AuthRouter from "./routes/auth";
import ApiRouter from "./routes/api";
import "./utils/config/passport";
import render from "./middlewares/render";
import unknownEndPoint from "./middlewares/unknownEndpoint";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(
  cookieSession({
    name: "quiz-session",
    keys: ["key1", "key2"],
    maxAge: 4 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve("../client/build")));
app.use("/auth", AuthRouter);
app.use("/api", ApiRouter);

app.get("/", render);
app.get("/sign-up", render);
app.get("/about", render);
app.get("/services", render);
app.get("/contact-us", render);

app.use(errorHandler);
app.use(unknownEndPoint);

export default app;
