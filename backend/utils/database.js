import mongoose from "mongoose";

async function databaseConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
}

export default databaseConnection;
