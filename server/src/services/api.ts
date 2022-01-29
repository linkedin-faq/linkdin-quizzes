import fs from "fs";

const genQuestions = (subject: string, limit: number) => {
  const contentFile = JSON.parse(
    fs.readFileSync(`./src/db/questions/${subject}.json`).toString()
  );

  const fileCopy = [...contentFile];
  const quiz = [];
  for (let i = 0; i < limit; i += 1) {
    const randomNum = Math.floor(Math.random() * fileCopy.length);
    quiz.push(fileCopy[randomNum]);
    fileCopy.splice(randomNum, 1);
  }
  return quiz;
};

const genQuiz = (subject: string) => genQuestions(subject, 15);
const genCustom = (subject: string, limit: number) =>
  genQuestions(subject, limit);

export default { genQuiz, genCustom };
