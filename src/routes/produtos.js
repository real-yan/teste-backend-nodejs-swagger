const app = require('express').Router();
const produtos = require('../controllers/produtos')

app.get("/produtos/:lojaid", produtos.getAll);

app.post("/produtos/adicionar", produtos.create);

app.get("/produtos/:id", produtos.getById);

app.post("/produtos/alterar/:id", produtos.update);

app.post("/produtos/remover", produtos.remove);

module.exports = app;