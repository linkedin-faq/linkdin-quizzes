import passport from "passport";
import { Strategy as LinkedinStrategy } from "passport-linkedin-oauth2";
import config from "../index";
import User from "../../../db/models/User";
import signUp from "../../../services/auth";

passport.use(
  new LinkedinStrategy(
    {
      clientID: config.linkedinClientId,
      clientSecret: config.linkedinSecret,
      callbackURL: "http://localhost:3001/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    (_accessToken, _refreshToken, profile, done) =>
      process.nextTick(async () => {
        if (!profile.emails) return done("linkedin authentication failed");
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
      })
  )
);
