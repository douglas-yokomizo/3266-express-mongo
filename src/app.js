import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await dbConnect();

connection.on("error", (error) => {
  console.error(`Erro ao conectar no MongoDB: ${error}`);
});

connection.once("open", () => {
  console.log("Conexão estabelecida com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscarLivroPorId(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  const livro = req.body;
  livros.push(livro);
  res.status(201).send("Livro adicionado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscarLivroPorId(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscarLivroPorId(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});

export default app;
