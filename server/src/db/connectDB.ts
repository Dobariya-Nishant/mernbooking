import mongoose from "mongoose";

async function connectDB() {
  try {
    const url = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/";
    await mongoose.connect(url);
    if (!process.env.MONGODB_URL) {
      return console.log("local DB connected");
    }
    return console.log("DB connected");
  } catch (error) {
    console.error(error);
    process.exit(500);
  }
}

export { connectDB };
