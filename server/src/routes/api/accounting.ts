import { Router } from "express";
// import fs from "fs";
// import path from "path";

const router = Router();

// const fileName = __filename.split("api\\")[1].split(".ts")[0];

// const contentFile = JSON.parse(
//   fs.readFileSync(`./src/db/questions/${fileName}.json`).toString()
// );

// const fileCopy = [...contentFile];
// const quiz = [];
// for (let i = 0; i < 15; i += 1) {
//   const randomNum = Math.floor(Math.random() * fileCopy.length);
//   quiz.push(fileCopy[randomNum]);
//   fileCopy.splice(randomNum, 1);
// }

export default router;
