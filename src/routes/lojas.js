const app = require('express').Router();
const lojas = require('../controllers/lojas')

/**
 * @swagger
 * /lojas:
 *  get:
 *      description: Retorna todas as lojas cadastradas.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.get("/lojas", lojas.getAll);

/**
 * @swagger
 * /lojas/adicionar:
 *  post:
 *      description: Cadastra uma nova loja.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.post("/lojas/adicionar", lojas.create);

/**
 * @swagger
 * /lojas/{id}:
 *  get:
 *      description: Retorna uma loja passando como parâmetro o seu id.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.get("/lojas/:id", lojas.getById);

/**
 * @swagger
 * /lojas/alterar/:id:
 *  post:
 *      description: Altera o cadastro de uma loja.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.post("/lojas/alterar/:id", lojas.update);

/**
 * @swagger
 * /lojas/remover:
 *  post:
 *      description: Remove uma loja cadastrada.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.post("/lojas/remover", lojas.remove);

module.exports = app;
