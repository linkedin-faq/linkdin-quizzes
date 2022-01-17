import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  dbUrl: process.env.MONGO_URI || "",
  secret: process.env.SECRET || "secret",
  accessTime: process.env.ACCESS_TIME || "5m",
  googleSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  facebookClientId: process.env.FACEBOOK_CLIENT_ID || "",
  facebookSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
  linkedinClientId: process.env.LINKEDIN_CLIENT_ID || "",
  linkedinSecret: process.env.LINKEDIN_SECRET || "",
};
