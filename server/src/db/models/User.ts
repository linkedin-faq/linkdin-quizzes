/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  secret2FA: {
    type: String,
    default: "",
  },
  verifiedEmail: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
  },
  quizzes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
      default: [],
    },
  ],
});

// UserSchema.set("toJSON", {
//   transform: (_, returnedObject) => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     returnedObject.id = <string>returnedObject._id.toString();
//     delete returnedObject._id;
//   },
// });

const User = mongoose.model("User", UserSchema);
export default User;
