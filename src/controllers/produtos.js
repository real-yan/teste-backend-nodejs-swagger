const Produto = require('../models/Produto')

const getAll = (req, res) => {
    Produto.findAll({
        where: {
            lojaId: req.params.lojaid
        }
    }).then((result) => {
        res.status(200).json(result)    
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar os produtos do banco.")
    })
}

const getById = (req, res) => {
    Produto.findByPk(req.params.id).then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar o produto do banco.")   
    })
}

const create = (req, res) => {
    Produto.create({
        lojaId: req.body.lojaId,
        codigo: req.body.codigo,
        nome: req.body.nome,
        classificacao: req.body.classificacao,
        quantidade: req.body.quantidade,
        fabricacao: req.body.fabricacao,
        validade: req.body.validade,
        valor: req.body.valor,
        obs: req.body.obs
    }).then((result) => {
        res.status(201).send("Produto salvo com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar salvar o produto no banco.")
    })
}

const update = (req, res) => {
    Produto.update({
        lojaId: req.body.lojaId,
        codigo: req.body.codigo,
        nome: req.body.nome,
        classificacao: req.body.classificacao,
        quantidade: req.body.quantidade,
        fabricacao: req.body.fabricacao,
        validade: req.body.validade,
        valor: req.body.valor,
        obs: req.body.obs
    }, {
        where: {
            id: req.body.id    
        }
    }).then((result) => {
        res.status(200).send("Produto alterado com sucesso com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar alterar o produto no banco.")
    })
}

const remove = (req, res) => {
    Produto.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.status(200).send("Produto removido com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar remover o produto do banco.")
    })
}

module.exports = {getAll, getById, create, update, remove}