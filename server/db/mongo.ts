import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URI } = process.env || "undefined";

// type ConnectOptions = mongodb.MongoClientOptions;

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
