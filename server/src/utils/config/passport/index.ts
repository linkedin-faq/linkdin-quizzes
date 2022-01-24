import "./google-setup";
import "./facebook-setup";
import "./linkedin-setup";
import passport from "passport";
import User from "../../../db/models/User";

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  done(null, user || null);
});
