const app = require('express').Router();
const lojas = require('../controllers/lojas')

app.get("/lojas", lojas.getAll);

app.post("/lojas/adicionar", lojas.create);

app.get("/lojas/:id", lojas.getById);

app.post("/lojas/alterar/:id", lojas.update);

app.post("/lojas/remover", lojas.remove);

module.exports = app;
