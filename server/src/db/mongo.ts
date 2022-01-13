import mongoose, { ConnectOptions } from "mongoose";
import config from "../utils/config";

const MONGO_URI = config.dbUrl;

const mongo: Promise<void> = mongoose
  .connect(
    MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then(() => {
    console.log("Connected to mongo successfully");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

export default mongo;
