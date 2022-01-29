import { Handler } from "express";
import apiService from "../services/api";

export const genQuiz: Handler = (req, res) =>
  res.send(apiService.genQuiz(req.params.subject));

export const genCustom: Handler = (req, res) =>
  res.send(apiService.genCustom(req.params.subject, Number(req.params.limit)));
