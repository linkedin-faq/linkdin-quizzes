import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import cookieSession from "cookie-session";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import authRouter from "./routes/authRouter";
import "./utils/config/passport";

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
app.use("/auth", authRouter);

app.get("/", (_req, res) => {
  console.log("im here");
  res.send("hello world");
});

app.use(errorHandler);

export default app;
