import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarLivrosPorId(req, res) {
    const id = req.params.id;
    try {
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async editarLivro(req, res) {
    const id = req.params.id;
    try {
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro editado com sucesso" });
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha ao editar livro` });
    }
  }

  static async excluirLivro(req, res) {
    const id = req.params.id;
    try {
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro removido com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha ao remover livro` });
    }
  }
}

export default LivroController;
