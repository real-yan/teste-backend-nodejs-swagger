const Produto = require('../models/Produto')

const getAll = (req, res) => {
    Produto.findAll({
        where: {
            lojaId: req.params.lojaid
        }
    }).then((result) => {
        console.log("Produtos retornados com sucesso.")
        res.json(result)   
    }).catch((error) => {
        console.log("Houve um erro ao tentar retornar os produtos do banco.")
        console.log(error)
    })
}

const getById = (req, res) => {
    Produto.findByPk(req.params.id).then((result) => {
        console.log("Produto "+ result.nome +" retornado com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar retornar o produto do banco.")
        console.log(error)   
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
        console.log("Produto salvo com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar salvar o produto no banco.")
        console.log(error)
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
            id: req.params.id    
        }
    }).then((result) => {
        console.log("Produto alterado com sucesso com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar alterar o produto no banco.")
        console.log(error)
    })
}

const remove = (req, res) => {
    Produto.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log("Produto removido com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar remover o produto do banco.")
        console.log(error)
    })
}

module.exports = {getAll, getById, create, update, remove}