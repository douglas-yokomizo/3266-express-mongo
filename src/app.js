import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
  },
  {
    id: 2,
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
  },
];

const buscarLivroPorId = (id) => {
  return livros.findIndex((livro) => livro.id === +id);
};

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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

export default app;
