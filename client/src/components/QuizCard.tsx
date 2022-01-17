import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const QuizCard = function ({
  logoImg,
  subject,
  description,
}: {
  logoImg: string;
  subject: string;
  description: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ aspectRatio: "1", objectFit: "unset" }}
          height="100%"
          image={logoImg}
          alt={`${subject} logo`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuizCard;
