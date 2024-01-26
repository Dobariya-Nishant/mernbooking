import "dotenv/config";
import { connectDB } from "./db";
import { app } from "./app";

const db = connectDB();

db.then(() => {
  app.listen(process.env.PORT || 8082, () => {
    console.log(`server is runing on ${process.env.PORT || 8082}`);
  });
});
