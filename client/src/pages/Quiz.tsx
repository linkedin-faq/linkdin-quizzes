/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/quiz.scss";
import CheckBox from "../components/Checkbox/CheckBox";

const Quiz = function () {
  const navigate = useNavigate();
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [correctAns, setCorrectAns] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const sendAns = (optionSelected: Option) => {
    if (optionSelected === questions[currentQuestion].correctAns)
      setCorrectAns((prev) => prev + 1);
    currentQuestion !== 14
      ? setCurrentQuestion((prev) => prev + 1)
      : console.log(correctAns);
  };

  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(
        `http://localhost:3001/api/${subject}`
      );
      if (quizQuestions.data.length === 15)
        setQuestions(quizQuestions.data || []);
    };
    initialQuiz();
  }, [navigate, subject]);

  return questions ? (
    <div className="quiz">
      <h1>{questions[currentQuestion]?.query || ""}</h1>
      <h2>{questions[currentQuestion]?.code || ""}</h2>
      <CheckBox
        options={questions[currentQuestion]?.options || ""}
        sendAns={sendAns}
      />
    </div>
  ) : (
    <div>
      <h1>Could Not Upload Quiz , Please Try Again In A Minute</h1>
      <button type="button" onClick={() => navigate("/")}>
        Return To Main Menu
      </button>
    </div>
  );
};

export default Quiz;
