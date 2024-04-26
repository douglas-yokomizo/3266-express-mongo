import express from "express";
import rotasLivros from "./livrosRoutes.js";
import rotasAutores from "./autorRoutes.js";

const routes = (app) => {
  app.get("/", (req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), rotasLivros, rotasAutores);
};

export default routes;
