import mongoose from "mongoose";

let MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

// This function connects to MongoDB when called.
export const connectToDatabase = async () => {
  //   This function connects to MongoDB when called.
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI not avail!");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "Organizr",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected successfully");
  return cached.conn;
};
