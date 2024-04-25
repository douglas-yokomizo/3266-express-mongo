import mongoose from "mongoose";

const dbConnect = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
};

export default dbConnect;
