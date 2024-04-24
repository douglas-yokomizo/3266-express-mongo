import mongoose from "mongoose";

const dbConnect = async () => {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.iu3plxi.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
};

export default dbConnect;
