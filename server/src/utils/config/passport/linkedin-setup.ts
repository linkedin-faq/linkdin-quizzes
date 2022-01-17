import passport from "passport";
import { Strategy as LinkedinStrategy } from "passport-linkedin-oauth2";
import config from "../index";

passport.use(
  new LinkedinStrategy(
    {
      clientID: config.linkedinClientId,
      clientSecret: config.linkedinSecret,
      callbackURL: "http://localhost:3001/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    (_accessToken, _refreshToken, profile, done) =>
      process.nextTick(() => {
        // eslint-disable-next-line no-underscore-dangle
        console.log(JSON.parse(profile._raw));
        return done(null, profile);
      })
    /*
 use the profile info (mainly profile id) to check if the user is registerd in ur db
 If yes select the user and pass him to the done callback
 If not create the user and then select him and pass to callback
*/
  )
);
