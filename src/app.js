import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();

connection.on("error", (error) => {
  console.error(`Erro ao conectar no MongoDB: ${error}`);
});

connection.once("open", () => {
  console.log("Conexão estabelecida com sucesso");
});

const app = express();
routes(app);

export default app;
