import app from "./app";
import config from "./utils/config";
import "./db/mongo";

const PORT = config.port || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
