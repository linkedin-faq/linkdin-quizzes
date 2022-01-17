import React from "react";
import Grid from "@mui/material/Grid";
import QuizCard from "../components/QuizCard";
import images from "../assests/assets";

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
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.angular}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.html}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.react}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.vue}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.javascript}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.json}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.aws}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.cSharp}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.bash}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.azure}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.autocad}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.agile}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.git}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <QuizCard
            logoImg={images.go}
            subject="angular"
            description="lurem ipsum lurm ipsum"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
