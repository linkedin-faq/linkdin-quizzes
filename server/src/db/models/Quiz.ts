/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema } from "mongoose";

const QuizSchema: Schema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
  },
  num_of_questions: {
    type: Number,
  },
  result: {
    type: Number,
  },
  time: {
    type: String,
    default: "",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: "",
  },
});

QuizSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    returnedObject.id = <string>returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const User = mongoose.model("Quiz", QuizSchema);
export default User;
