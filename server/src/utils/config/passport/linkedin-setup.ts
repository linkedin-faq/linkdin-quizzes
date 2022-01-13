import passport from "passport";
import { Strategy as LinkedinStrategy } from "passport-linkedin-oauth2";
import config from "../index";

passport.use(
  new LinkedinStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookSecret,
      callbackURL: "http://localhost:3001/google/callback",
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
