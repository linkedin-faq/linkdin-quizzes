/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import config from "../index";
import User from "../../../db/models/User";
import signUp from "../../../services/auth";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleSecret,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      if (!profile.emails) return done();
      const email = profile.emails[0].value;
      const user = await User.findOne({ email });
      if (!user) {
        const newUser = await signUp({
          firstName: profile.name?.givenName || "",
          lastName: profile.name?.familyName || "",
          email,
          password: "ggggg",
        });
        return done(null, newUser);
      }
      return done(null, user);
    }
  )
);
