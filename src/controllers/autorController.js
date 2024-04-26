import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutor(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    const id = req.params.id;
    try {
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async editarAutor(req, res) {
    const id = req.params.id;
    try {
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor editado com sucesso" });
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha ao editar autor` });
    }
  }

  static async excluirAutor(req, res) {
    const id = req.params.id;
    try {
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor removido com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha ao remover autor` });
    }
  }
}

export default AutorController;
