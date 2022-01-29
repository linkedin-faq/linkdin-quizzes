import React from "react";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";
import quizzesInfo from "../utils/quizzesInfo";

const Home = function () {
  return (
    <div>
      <h1>Full stack web quizzes</h1>
      <Grid
        container
        direction="row"
        // justifyContent="space-between"
        spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        alignItems="streach"
        style={{ height: "100%", width: "100%", minHeight: "280px" }}
      >
        {quizzesInfo.map((quizInfo) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <QuizCard
              logoImg={quizInfo.img}
              subject={quizInfo.subject}
              description="lurem ipsum lurm ipsum"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
