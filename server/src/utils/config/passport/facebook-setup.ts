import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import config from "../index";

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookSecret,
      callbackURL: "http://localhost:3001/auth/facebook/callback",
    },
    (_accessToken, _refreshToken, profile, done) =>
      /*
 use the profile info (mainly profile id) to check if the user is registerd in ur db
 If yes select the user and pass him to the done callback
 If not create the user and then select him and pass to callback
*/
      done(null, profile)
  )
);
